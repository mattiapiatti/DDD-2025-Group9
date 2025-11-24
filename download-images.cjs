#!/usr/bin/env node

/**
 * Script to download all external images from sistema_solare_1.json
 * and save them locally in static/images/planets/
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { URL } = require('url');

// Paths
const JSON_PATH = path.join(__dirname, 'src', 'json', 'sistema_solare_1.json');
const IMAGES_BASE_DIR = path.join(__dirname, 'static', 'images', 'planets');
const JSON_OUTPUT_PATH = path.join(__dirname, 'src', 'json', 'sistema_solare_1_local.json');

// Image columns to process
const IMAGE_COLUMNS = ['Unnamed: 7', 'Unnamed: 8', 'Unnamed: 9', 'Unnamed: 10', 'Unnamed: 11'];

// Counter for statistics
let stats = {
  total: 0,
  downloaded: 0,
  failed: 0,
  skipped: 0
};

// Helper to create directories
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Helper to sanitize filenames
function sanitizeFilename(url, index) {
  try {
    const urlObj = new URL(url);
    let filename = path.basename(urlObj.pathname);
    
    // Remove query params from filename
    filename = filename.split('?')[0];
    
    // If no extension or filename too short, create one
    if (!filename || filename.length < 3 || !filename.includes('.')) {
      const ext = getExtensionFromUrl(url);
      filename = `image_${index}${ext}`;
    }
    
    // Replace unsafe characters
    filename = filename.replace(/[^a-zA-Z0-9._-]/g, '_');
    
    return filename;
  } catch (e) {
    return `image_${index}.jpg`;
  }
}

// Get extension from URL or content-type
function getExtensionFromUrl(url) {
  const urlLower = url.toLowerCase();
  if (urlLower.includes('.jpg') || urlLower.includes('jpeg')) return '.jpg';
  if (urlLower.includes('.png')) return '.png';
  if (urlLower.includes('.gif')) return '.gif';
  if (urlLower.includes('.webp')) return '.webp';
  if (urlLower.includes('.tif')) return '.tif';
  return '.jpg'; // default
}

// Download a single image
function downloadImage(url, outputPath) {
  return new Promise((resolve, reject) => {
    try {
      const urlObj = new URL(url);
      const client = urlObj.protocol === 'https:' ? https : http;
      
      const options = {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
        },
        timeout: 15000
      };
      
      const request = client.get(url, options, (response) => {
        // Handle redirects
        if (response.statusCode === 301 || response.statusCode === 302) {
          return downloadImage(response.headers.location, outputPath)
            .then(resolve)
            .catch(reject);
        }
        
        if (response.statusCode !== 200) {
          reject(new Error(`Status ${response.statusCode}`));
          return;
        }
        
        const fileStream = fs.createWriteStream(outputPath);
        response.pipe(fileStream);
        
        fileStream.on('finish', () => {
          fileStream.close();
          resolve(outputPath);
        });
        
        fileStream.on('error', (err) => {
          fs.unlink(outputPath, () => {});
          reject(err);
        });
      });
      
      request.on('error', reject);
      request.on('timeout', () => {
        request.destroy();
        reject(new Error('Timeout'));
      });
      
    } catch (error) {
      reject(error);
    }
  });
}

// Process all images with delay to avoid rate limiting
async function processImages(data) {
  let currentPlanet = null;
  let planetImageIndex = {};
  
  for (let i = 0; i < data.length; i++) {
    const entry = data[i];
    const firstColumn = entry['In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)'];
    
    // Track current planet
    if (firstColumn && firstColumn !== 'null') {
      currentPlanet = firstColumn;
      if (!planetImageIndex[currentPlanet]) {
        planetImageIndex[currentPlanet] = 0;
        // Create planet directory
        ensureDir(path.join(IMAGES_BASE_DIR, currentPlanet.toLowerCase()));
      }
    }
    
    // Process image columns
    for (const column of IMAGE_COLUMNS) {
      const imageUrl = entry[column];
      
      if (imageUrl && imageUrl !== null && imageUrl !== 'null' && imageUrl.startsWith('http')) {
        stats.total++;
        
        if (!currentPlanet) {
          console.log(`⚠️  No planet context for image: ${imageUrl.substring(0, 60)}...`);
          stats.skipped++;
          continue;
        }
        
        const planetDir = path.join(IMAGES_BASE_DIR, currentPlanet.toLowerCase());
        const filename = sanitizeFilename(imageUrl, planetImageIndex[currentPlanet]);
        const outputPath = path.join(planetDir, filename);
        
        // Check if already exists
        if (fs.existsSync(outputPath)) {
          console.log(`⏭️  Skip (exists): ${currentPlanet}/${filename}`);
          entry[column] = `/images/planets/${currentPlanet.toLowerCase()}/${filename}`;
          stats.skipped++;
          planetImageIndex[currentPlanet]++;
          continue;
        }
        
        // Download with retry
        let success = false;
        for (let attempt = 1; attempt <= 3; attempt++) {
          try {
            console.log(`⬇️  [${attempt}/3] Downloading: ${currentPlanet}/${filename}`);
            await downloadImage(imageUrl, outputPath);
            
            // Update JSON entry with local path
            entry[column] = `/images/planets/${currentPlanet.toLowerCase()}/${filename}`;
            
            console.log(`✅ Success: ${currentPlanet}/${filename}`);
            stats.downloaded++;
            success = true;
            planetImageIndex[currentPlanet]++;
            break;
            
          } catch (error) {
            console.log(`❌ Attempt ${attempt} failed: ${error.message}`);
            
            if (attempt === 3) {
              console.log(`💀 Give up: ${imageUrl.substring(0, 80)}...`);
              stats.failed++;
              // Keep original URL in JSON if download fails
            }
          }
          
          // Wait between attempts (progressive backoff)
          if (attempt < 3) {
            await new Promise(resolve => setTimeout(resolve, attempt * 1000));
          }
        }
        
        // Delay between images to avoid rate limiting
        if (success) {
          await new Promise(resolve => setTimeout(resolve, 200));
        }
      }
    }
  }
  
  return data;
}

// Main function
async function main() {
  console.log('🚀 Starting image download script...\n');
  
  // Create base directory
  ensureDir(IMAGES_BASE_DIR);
  
  // Read JSON
  console.log('📖 Reading JSON...');
  const jsonData = JSON.parse(fs.readFileSync(JSON_PATH, 'utf8'));
  console.log(`   Found ${jsonData.length} entries\n`);
  
  // Process all images
  console.log('⬇️  Starting downloads...\n');
  const updatedData = await processImages(jsonData);
  
  // Save updated JSON
  console.log('\n💾 Saving updated JSON...');
  fs.writeFileSync(
    JSON_OUTPUT_PATH,
    JSON.stringify(updatedData, null, 2),
    'utf8'
  );
  console.log(`   Saved to: ${JSON_OUTPUT_PATH}`);
  
  // Print statistics
  console.log('\n📊 Statistics:');
  console.log(`   Total images found: ${stats.total}`);
  console.log(`   ✅ Downloaded: ${stats.downloaded}`);
  console.log(`   ⏭️  Skipped (exists): ${stats.skipped}`);
  console.log(`   ❌ Failed: ${stats.failed}`);
  console.log(`   Success rate: ${((stats.downloaded / stats.total) * 100).toFixed(1)}%`);
  
  console.log('\n✨ Done!\n');
  console.log('Next steps:');
  console.log('1. Review downloaded images in static/images/planets/');
  console.log('2. Replace sistema_solare_1.json with sistema_solare_1_local.json');
  console.log('3. Remove proxy code from script.js\n');
}

// Run
main().catch(error => {
  console.error('\n💥 Fatal error:', error);
  process.exit(1);
});
