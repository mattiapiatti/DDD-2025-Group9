import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OutlinePass } from 'three/addons/postprocessing/OutlinePass.js';

import bgTexture1 from '/images/1.jpg';
import bgTexture2 from '/images/2.jpg';
import bgTexture3 from '/images/3.jpg';
import bgTexture4 from '/images/4.jpg';
import sunTexture from '/images/sun.jpg';
import mercuryTexture from '/images/mercurymap.jpg';
import mercuryBump from '/images/mercurybump.jpg';
import venusTexture from '/images/venusmap.jpg';
import venusBump from '/images/venusmap.jpg';
import venusAtmosphere from '/images/venus_atmosphere.jpg';
import earthTexture from '/images/earth_daymap.jpg';
import earthNightTexture from '/images/earth_nightmap.jpg';
import earthAtmosphere from '/images/earth_atmosphere.jpg';
import earthMoonTexture from '/images/moonmap.jpg';
import earthMoonBump from '/images/moonbump.jpg';
import marsTexture from '/images/marsmap.jpg';
import marsBump from '/images/marsbump.jpg';
import jupiterTexture from '/images/jupiter.jpg';
import ioTexture from '/images/jupiterIo.jpg';
import europaTexture from '/images/jupiterEuropa.jpg';
import ganymedeTexture from '/images/jupiterGanymede.jpg';
import callistoTexture from '/images/jupiterCallisto.jpg';
import saturnTexture from '/images/saturnmap.jpg';
import satRingTexture from '/images/saturn_ring.png';
import uranusTexture from '/images/uranus.jpg';
import uraRingTexture from '/images/uranus_ring.png';
import neptuneTexture from '/images/neptune.jpg';
import plutoTexture from '/images/plutomap.jpg';
import sistemaSolareData from './json/sistema_solare_1.json';

// ******  SETUP  ******
console.log("Create the scene");
const scene = new THREE.Scene();

console.log("Create a perspective projection camera");
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(-175, 115, 5);

console.log("Create the renderer");
const renderer = new THREE.WebGL1Renderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.domElement.style.width = '100%';
renderer.domElement.style.height = '100%';
renderer.domElement.style.position = 'absolute';
renderer.domElement.style.top = '0';
renderer.domElement.style.left = '0';
renderer.domElement.style.display = 'block';
renderer.domElement.style.backgroundColor = '#000';
renderer.domElement.style.zIndex = '0';
renderer.toneMapping = THREE.ACESFilmicToneMapping;

console.log("Create an orbit control");
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.75;
controls.screenSpacePanning = false;
controls.enabled = true;

console.log("Set up texture loader");
const cubeTextureLoader = new THREE.CubeTextureLoader();
const loadTexture = new THREE.TextureLoader();

// ******  POSTPROCESSING setup ******
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));

// ******  OUTLINE PASS  ******
const outlinePass = new OutlinePass(new THREE.Vector2(window.innerWidth, window.innerHeight), scene, camera);
outlinePass.edgeStrength = 3;
outlinePass.edgeGlow = 1;
outlinePass.visibleEdgeColor.set(0xffffff);
outlinePass.hiddenEdgeColor.set(0x190a05);
composer.addPass(outlinePass);

// ******  BLOOM PASS  ******
const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1, 0.4, 0.85);
bloomPass.threshold = 1;
bloomPass.radius = 0.9;
composer.addPass(bloomPass);

// ****** AMBIENT LIGHT ******
console.log("Add the ambient light");
var lightAmbient = new THREE.AmbientLight(0x222222, 6);
scene.add(lightAmbient);

// ******  Star background  ******
scene.background = cubeTextureLoader.load([

  bgTexture3,
  bgTexture1,
  bgTexture2,
  bgTexture2,
  bgTexture4,
  bgTexture2
]);

// ****** SETTINGS FOR INTERACTIVE CONTROLS  ******
let accelerationOrbit = 1;
let acceleration = 1;
const sunIntensity = 1.9;
let isInfoShown = false;

// mouse movement
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function onMouseMove(event) {
  event.preventDefault();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
}

// ******  SELECT PLANET  ******
let selectedPlanet = null;
let isMovingTowardsPlanet = false;
let targetCameraPosition = new THREE.Vector3();
let targetControlsTarget = new THREE.Vector3();
let offset;

function onDocumentMouseDown(event) {
  event.preventDefault();

  // Prevent planet selection if popup is open
  if (isInfoShown) {
    return;
  }

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  var intersects = raycaster.intersectObjects(raycastTargets);

  if (intersects.length > 0) {
    const clickedObject = intersects[0].object;
    const newPlanet = identifyPlanet(clickedObject);
    if (newPlanet) {
      closeInfoNoZoomOut();

      selectedPlanet = newPlanet;
      accelerationOrbit = 0; // Stop orbital movement

      // Get the planet position
      const planetPosition = new THREE.Vector3();
      selectedPlanet.planet.getWorldPosition(planetPosition);

      // Get planet radius for optimal zoom distance
      const planetRadius = selectedPlanet.planet.geometry.parameters.radius;
      
      // Calculate zoom distance based on planet size (3.5x radius for close view)
      const zoomDistance = planetRadius * 3.5;

      // Calculate direction from planet to current camera
      const directionToCamera = new THREE.Vector3();
      directionToCamera.subVectors(camera.position, planetPosition).normalize();

      // Position camera at zoom distance along the same direction
      targetCameraPosition.copy(planetPosition).add(directionToCamera.multiplyScalar(zoomDistance));
      targetControlsTarget.copy(planetPosition);
      isMovingTowardsPlanet = true;

      // Start animations
      startPlanetInfoAnimation(selectedPlanet.name);
      animateCameraAdjustment(500);
      
      // Restore original textures when zooming on a planet
      restoreAllOriginalTextures();
    }
  }
}

function identifyPlanet(clickedObject) {
  if (clickedObject.material === mercury.planet.material) {
    return mercury;
  } else if (clickedObject.material === venus.Atmosphere.material) {
    return venus;
  } else if (clickedObject.material === earth.Atmosphere.material) {
    return earth;
  } else if (clickedObject.material === mars.planet.material) {
    return mars;
  } else if (clickedObject.material === jupiter.planet.material) {
    return jupiter;
  } else if (clickedObject.material === saturn.planet.material) {
    return saturn;
  } else if (clickedObject.material === uranus.planet.material) {
    return uranus;
  } else if (clickedObject.material === neptune.planet.material) {
    return neptune;
  } else if (clickedObject.material === pluto.planet.material) {
    return pluto;
  } 

  return null;
}// ******  ANIMATE CANVAS HEIGHT  ******
function animateCanvasHeight(targetHeightPercent, duration, callback) {
  const startHeight = parseFloat(renderer.domElement.style.height.replace('%', '')) || 100;
  const endHeight = targetHeightPercent;
  const startTime = performance.now();

  function animate(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
    const currentHeight = startHeight + (endHeight - startHeight) * easeProgress;
    const currentPixelHeight = Math.round(window.innerHeight * currentHeight / 100);

    renderer.domElement.style.height = currentPixelHeight + 'px';
    renderer.setSize(window.innerWidth, currentPixelHeight, true);
    composer.setSize(window.innerWidth, currentPixelHeight);
    camera.aspect = window.innerWidth / currentPixelHeight;
    camera.updateProjectionMatrix();
    composer.render();

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      if (callback) callback();
    }
  }
  requestAnimationFrame(animate);
}

// ******  ANIMATE PLANET SCALE  ******
function animatePlanetScale(planet, targetScale, duration) {
  const startScale = planet.scale.x;
  const endScale = targetScale;
  const startTime = performance.now();

  function animate(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const currentScale = startScale + (endScale - startScale) * progress;
    planet.scale.set(currentScale, currentScale, currentScale);
    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }
  requestAnimationFrame(animate);
}

// ******  ANIMATE CAMERA ADJUSTMENT FOR CANVAS RESIZE  ******
let originalFov = 45;
function animateCameraAdjustment(duration) {
  const startTime = performance.now();
  originalFov = camera.fov;
  const targetFov = originalFov * 0.75; // Reduce FOV to compensate for height reduction

  function animate(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
    const currentFov = originalFov + (targetFov - originalFov) * easeProgress;

    camera.fov = currentFov;
    camera.updateProjectionMatrix();

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }
  requestAnimationFrame(animate);
}

function animateCameraAdjustmentReverse(duration) {
  const startTime = performance.now();
  const startFov = camera.fov;
  const targetFov = originalFov;

  function animate(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
    const currentFov = startFov + (targetFov - startFov) * easeProgress;

    camera.fov = currentFov;
    camera.updateProjectionMatrix();

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }
  requestAnimationFrame(animate);
}

// ******  START PLANET INFO ANIMATION  ******
function startPlanetInfoAnimation(planet) {
  var info = document.getElementById('planetInfo');
  var name = document.getElementById('planetName');
  var details = document.getElementById('planetDetails');

  name.innerText = planet;

  // Initialize with placeholder
  updatePlanetDetails(null);

  // Load timeline
  loadTimeline(planet);

  info.style.display = 'block';
  info.style.transform = 'translateY(0)';
  isInfoShown = true;
  controls.enabled = false; // Disable orbit controls
  animateCanvasHeight(50, 500, () => {
    // after animation
  });
}
let isZoomingOut = false;
let zoomOutTargetPosition = new THREE.Vector3(-175, 115, 5);
let originalCameraPosition = new THREE.Vector3(-175, 115, 5);
// close 'x' button function
function closeInfo() {
  var info = document.getElementById('planetInfo');
  info.style.transform = 'translateY(100%)';
  accelerationOrbit = 1;
  isInfoShown = false;
  controls.enabled = true; // Re-enable orbit controls
  animateCanvasHeight(100, 500, () => {
    // after animation
  });
  animateCameraAdjustmentReverse(500);
  isZoomingOut = true;
  
  // Reset camera to original position and target
  zoomOutTargetPosition.copy(originalCameraPosition);
  controls.target.set(0, 0, 0);
  
  // Apply mosaic textures when returning to full solar system view
  setTimeout(() => {
    if (mosaicTexturesReady) {
      applyPreloadedTextures();
    } else {
      applyMosaicTextures();
    }
  }, 300);
  
  setTimeout(() => {
    info.style.display = 'none';
  }, 500);
}
window.closeInfo = closeInfo;
// close info when clicking another planet
function closeInfoNoZoomOut() {
  var info = document.getElementById('planetInfo');
  info.style.display = 'none';
  info.style.transform = 'translateY(100%)';
  accelerationOrbit = 1;
}
// ******  SUN  ******
let sunMat;

const sunSize = 697 / 40; // 40 times smaller scale than earth
const sunGeom = new THREE.SphereGeometry(sunSize, 32, 20);
sunMat = new THREE.MeshStandardMaterial({
  emissive: 0xFFF88F,
  emissiveMap: loadTexture.load(sunTexture),
  emissiveIntensity: sunIntensity
});
const sun = new THREE.Mesh(sunGeom, sunMat);
scene.add(sun);

//point light in the sun
const pointLight = new THREE.PointLight(0xFDFFD3, 1200, 400, 1.4);
scene.add(pointLight);


// ******  PLANET CREATION FUNCTION  ******
function createPlanet(planetName, size, position, tilt, texture, bump, ring, atmosphere, moons) {

  let material;
  if (texture instanceof THREE.Material) {
    material = texture;
  }
  else if (bump) {
    material = new THREE.MeshPhongMaterial({
      map: loadTexture.load(texture),
      bumpMap: loadTexture.load(bump),
      bumpScale: 0.7
    });
  }
  else {
    material = new THREE.MeshPhongMaterial({
      map: loadTexture.load(texture)
    });
  }
  
  // Store original texture info for later reference
  material.userData = {
    originalTexture: texture,
    originalBump: bump,
    planetName: planetName
  };

  const name = planetName;
  const geometry = new THREE.SphereGeometry(size, 32, 20);
  const planet = new THREE.Mesh(geometry, material);
  const planet3d = new THREE.Object3D;
  const planetSystem = new THREE.Group();
  planetSystem.add(planet);
  let Atmosphere;
  let Ring;
  planet.position.x = position;
  planet.rotation.z = tilt * Math.PI / 180;

  // add orbit path
  const orbitPath = new THREE.EllipseCurve(
    0, 0,            // ax, aY
    position, position, // xRadius, yRadius
    0, 2 * Math.PI,   // aStartAngle, aEndAngle
    false,            // aClockwise
    0                 // aRotation
  );

  const pathPoints = orbitPath.getPoints(100);
  const orbitGeometry = new THREE.BufferGeometry().setFromPoints(pathPoints);
  const orbitMaterial = new THREE.LineBasicMaterial({ color: 0xFFFFFF, transparent: true, opacity: 0.03 });
  const orbit = new THREE.LineLoop(orbitGeometry, orbitMaterial);
  orbit.rotation.x = Math.PI / 2;
  planetSystem.add(orbit);

  //add ring
  if (ring) {
    const RingGeo = new THREE.RingGeometry(ring.innerRadius, ring.outerRadius, 30);
    const RingMat = new THREE.MeshStandardMaterial({
      map: loadTexture.load(ring.texture),
      side: THREE.DoubleSide
    });
    Ring = new THREE.Mesh(RingGeo, RingMat);
    planetSystem.add(Ring);
    Ring.position.x = position;
    Ring.rotation.x = -0.5 * Math.PI;
    Ring.rotation.y = -tilt * Math.PI / 180;
  }

  //add atmosphere
  if (atmosphere) {
    const atmosphereGeom = new THREE.SphereGeometry(size + 0.1, 32, 20);
    const atmosphereMaterial = new THREE.MeshPhongMaterial({
      map: loadTexture.load(atmosphere),
      transparent: true,
      opacity: 0.4,
      depthTest: true,
      depthWrite: false
    })
    Atmosphere = new THREE.Mesh(atmosphereGeom, atmosphereMaterial)

    Atmosphere.rotation.z = 0.41;
    planet.add(Atmosphere);
  }

  //add moons
  if (moons) {
    moons.forEach(moon => {
      let moonMaterial;

      if (moon.bump) {
        moonMaterial = new THREE.MeshStandardMaterial({
          map: loadTexture.load(moon.texture),
          bumpMap: loadTexture.load(moon.bump),
          bumpScale: 0.5
        });
      } else {
        moonMaterial = new THREE.MeshStandardMaterial({
          map: loadTexture.load(moon.texture)
        });
      }
      const moonGeometry = new THREE.SphereGeometry(moon.size, 32, 20);
      const moonMesh = new THREE.Mesh(moonGeometry, moonMaterial);
      const moonOrbitDistance = size * 1.5;
      moonMesh.position.set(moonOrbitDistance, 0, 0);
      planetSystem.add(moonMesh);
      moon.mesh = moonMesh;
    });
  }
  //add planet system to planet3d object and to the scene
  planet3d.add(planetSystem);
  scene.add(planet3d);
  return { name, planet, planet3d, Atmosphere, moons, planetSystem, Ring, originalMaterial: material };
}

// ******  FUNCTION TO LOAD PLANET IMAGES FROM JSON  ******
function getPlanetImagesFromJSON(planetName) {
  const planetEntries = [];
  let currentPlanet = null;
  
  // Find all entries for this planet
  for (let i = 0; i < sistemaSolareData.length; i++) {
    const entry = sistemaSolareData[i];
    const firstColumn = entry['In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)'];
    
    if (firstColumn && firstColumn !== 'null') {
      currentPlanet = firstColumn;
    }
    
    if (currentPlanet && currentPlanet.toLowerCase() === planetName.toLowerCase()) {
      planetEntries.push(entry);
    }
    
    if (currentPlanet && currentPlanet.toLowerCase() !== planetName.toLowerCase() && planetEntries.length > 0) {
      break;
    }
  }

  // Collect all valid images
  const allImages = [];
  planetEntries.slice(1).forEach((entry) => {
    const imageColumns = ['Unnamed: 7', 'Unnamed: 8', 'Unnamed: 9', 'Unnamed: 10', 'Unnamed: 11'];
    imageColumns.forEach(column => {
      const imageUrl = entry[column];
      if (imageUrl && imageUrl !== null && imageUrl !== 'null' && imageUrl.startsWith('http')) {
        allImages.push(imageUrl);
      }
    });
  });

  return allImages;
}

// ******  APPLY PLANET-LIKE FILTERS TO CANVAS  ******
function applyPlanetFilters(ctx, size) {
  // Get image data
  const imageData = ctx.getImageData(0, 0, size, size);
  const data = imageData.data;
  
  // Apply color adjustments and vignette effect
  const centerX = size / 2;
  const centerY = size / 2;
  const maxRadius = size / 2;
  
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const i = (y * size + x) * 4;
      
      // Calculate distance from center
      const dx = x - centerX;
      const dy = y - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const normalizedDistance = distance / maxRadius;
      
      // Apply vignette effect (darker at edges)
      const vignette = Math.max(0, 1 - Math.pow(normalizedDistance, 1.5) * 0.4);
      
      // Apply spherical shading
      const sphereFactor = Math.cos(normalizedDistance * Math.PI / 2);
      
      // Reduce saturation slightly for more realistic look
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const gray = (r + g + b) / 3;
      const desaturation = 0.3;
      
      data[i] = (r * (1 - desaturation) + gray * desaturation) * vignette * (0.7 + sphereFactor * 0.3);
      data[i + 1] = (g * (1 - desaturation) + gray * desaturation) * vignette * (0.7 + sphereFactor * 0.3);
      data[i + 2] = (b * (1 - desaturation) + gray * desaturation) * vignette * (0.7 + sphereFactor * 0.3);
    }
  }
  
  ctx.putImageData(imageData, 0, 0);
  
  // Apply subtle blur at edges
  ctx.globalCompositeOperation = 'destination-in';
  const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(0.7, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0.95)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  ctx.globalCompositeOperation = 'source-over';
}

// ******  CREATE MOSAIC TEXTURE FROM IMAGES  ******
function createMosaicTexture(planetName, planet) {
  const images = getPlanetImagesFromJSON(planetName);
  
  if (images.length === 0) {
    console.log(`No images found for ${planetName}`);
    return;
  }

  // Create a canvas to combine multiple images
  const canvas = document.createElement('canvas');
  const size = 2048; // Texture size
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');

  // Calculate grid dimensions
  const cols = Math.ceil(Math.sqrt(images.length));
  const rows = Math.ceil(images.length / cols);
  const cellWidth = size / cols;
  const cellHeight = size / rows;

  let loadedImages = 0;
  const totalImages = Math.min(images.length, cols * rows);

  images.slice(0, totalImages).forEach((url, index) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    img.onload = () => {
      const col = index % cols;
      const row = Math.floor(index / cols);
      const x = col * cellWidth;
      const y = row * cellHeight;
      
      // Draw image in its cell with slight opacity to blend
      ctx.globalAlpha = 0.9;
      ctx.drawImage(img, x, y, cellWidth, cellHeight);
      ctx.globalAlpha = 1.0;
      
      loadedImages++;
      
      // When all images are loaded, apply filters and update the planet texture
      if (loadedImages === totalImages) {
        // Apply planet-like filters
        applyPlanetFilters(ctx, size);
        
        const texture = new THREE.CanvasTexture(canvas);
        texture.needsUpdate = true;
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        
        // Handle Earth's shader material specially
        if (planetName === 'Earth') {
          // Replace Earth's shader material with a simple material showing the mosaic
          const mosaicMaterial = new THREE.MeshPhongMaterial({
            map: texture,
            shininess: 5,
            specular: 0x222222,
            transparent: true,
            opacity: 0.85
          });
          mosaicMaterial.userData = planet.material.userData;
          planet.material = mosaicMaterial;
        } else if (planet.material.userData.originalTexture instanceof THREE.Material) {
          // For other shader materials
          console.log(`Cannot apply mosaic to shader material for ${planetName}`);
        } else {
          planet.material.map = texture;
          planet.material.shininess = 5;
          planet.material.specular = new THREE.Color(0x222222);
          planet.material.transparent = true;
          planet.material.opacity = 0.85;
          planet.material.needsUpdate = true;
        }
      }
    };
    
    img.onerror = () => {
      loadedImages++;
      console.log(`Failed to load image: ${url}`);
      
      if (loadedImages === totalImages) {
        applyPlanetFilters(ctx, size);
        
        const texture = new THREE.CanvasTexture(canvas);
        texture.needsUpdate = true;
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        
        if (planetName === 'Earth') {
          const mosaicMaterial = new THREE.MeshPhongMaterial({
            map: texture,
            shininess: 5,
            specular: 0x222222,
            transparent: true,
            opacity: 0.85
          });
          mosaicMaterial.userData = planet.material.userData;
          planet.material = mosaicMaterial;
        } else if (!(planet.material.userData.originalTexture instanceof THREE.Material)) {
          planet.material.map = texture;
          planet.material.shininess = 5;
          planet.material.specular = new THREE.Color(0x222222);
          planet.material.transparent = true;
          planet.material.opacity = 0.85;
          planet.material.needsUpdate = true;
        }
      }
    };
    
    img.src = url;
  });
}

// ******  RESTORE ORIGINAL PLANET TEXTURE  ******
function restoreOriginalTexture(planet, planetObj) {
  const userData = planet.material.userData;
  
  if (!userData || !userData.originalTexture) return;
  
  // Special handling for Earth's shader material
  if (userData.planetName === 'Earth' && userData.originalTexture instanceof THREE.Material) {
    planet.material = planetObj.originalMaterial;
    return;
  }
  
  if (userData.originalTexture instanceof THREE.Material) {
    // Cannot restore other shader materials, skip
    return;
  }
  
  // Restore original texture
  planet.material.map = loadTexture.load(userData.originalTexture);
  if (userData.originalBump) {
    planet.material.bumpMap = loadTexture.load(userData.originalBump);
  }
  planet.material.needsUpdate = true;
}

// ******  APPLY MOSAIC TEXTURES TO ALL PLANETS  ******
function applyMosaicTextures() {
  const planets = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto];
  
  planets.forEach(planetObj => {
    createMosaicTexture(planetObj.name, planetObj.planet);
  });
}

// ******  RESTORE ALL ORIGINAL TEXTURES  ******
function restoreAllOriginalTextures() {
  const planets = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto];
  
  planets.forEach(planetObj => {
    restoreOriginalTexture(planetObj.planet, planetObj);
  });
}


// ******  LOADING OBJECTS METHOD  ******
function loadObject(path, position, scale, callback) {
  const loader = new GLTFLoader();

  loader.load(path, function (gltf) {
    const obj = gltf.scene;
    obj.position.set(position, 0, 0);
    obj.scale.set(scale, scale, scale);
    scene.add(obj);
    if (callback) {
      callback(obj);
    }
  }, undefined, function (error) {
    console.error('An error happened', error);
  });
}

// ******  ASTEROIDS  ******
const asteroids = [];
function loadAsteroids(path, numberOfAsteroids, minOrbitRadius, maxOrbitRadius) {
  const loader = new GLTFLoader();
  loader.load(path, function (gltf) {
    gltf.scene.traverse(function (child) {
      if (child.isMesh) {
        for (let i = 0; i < numberOfAsteroids / 12; i++) { // Divide by 12 because there are 12 asteroids in the pack
          const asteroid = child.clone();
          const orbitRadius = THREE.MathUtils.randFloat(minOrbitRadius, maxOrbitRadius);
          const angle = Math.random() * Math.PI * 2;
          const x = orbitRadius * Math.cos(angle);
          const y = 0;
          const z = orbitRadius * Math.sin(angle);
          child.receiveShadow = true;
          asteroid.position.set(x, y, z);
          asteroid.scale.setScalar(THREE.MathUtils.randFloat(0.8, 1.2));
          scene.add(asteroid);
          asteroids.push(asteroid);
        }
      }
    });
  }, undefined, function (error) {
    console.error('An error happened', error);
  });
}


// Earth day/night effect shader material
const earthMaterial = new THREE.ShaderMaterial({
  uniforms: {
    dayTexture: { type: "t", value: loadTexture.load(earthTexture) },
    nightTexture: { type: "t", value: loadTexture.load(earthNightTexture) },
    sunPosition: { type: "v3", value: sun.position }
  },
  vertexShader: `
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vSunDirection;

    uniform vec3 sunPosition;

    void main() {
      vUv = uv;
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vNormal = normalize(modelMatrix * vec4(normal, 0.0)).xyz;
      vSunDirection = normalize(sunPosition - worldPosition.xyz);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D dayTexture;
    uniform sampler2D nightTexture;

    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vSunDirection;

    void main() {
      float intensity = max(dot(vNormal, vSunDirection), 0.0);
      vec4 dayColor = texture2D(dayTexture, vUv);
      vec4 nightColor = texture2D(nightTexture, vUv)* 0.2;
      gl_FragColor = mix(nightColor, dayColor, intensity);
    }
  `
});


// ******  MOONS  ******
// Earth
const earthMoon = [{
  size: 1.6,
  texture: earthMoonTexture,
  bump: earthMoonBump,
  orbitSpeed: 0.001 * accelerationOrbit,
  orbitRadius: 10
}]

// Mars' moons with path to 3D models (phobos & deimos)
const marsMoons = [
  {
    modelPath: '/images/mars/phobos.glb',
    scale: 0.1,
    orbitRadius: 5,
    orbitSpeed: 0.002 * accelerationOrbit,
    position: 100,
    mesh: null
  },
  {
    modelPath: '/images/mars/deimos.glb',
    scale: 0.1,
    orbitRadius: 9,
    orbitSpeed: 0.0005 * accelerationOrbit,
    position: 120,
    mesh: null
  }
];

// Jupiter
const jupiterMoons = [
  {
    size: 1.6,
    texture: ioTexture,
    orbitRadius: 20,
    orbitSpeed: 0.0005 * accelerationOrbit
  },
  {
    size: 1.4,
    texture: europaTexture,
    orbitRadius: 24,
    orbitSpeed: 0.00025 * accelerationOrbit
  },
  {
    size: 2,
    texture: ganymedeTexture,
    orbitRadius: 28,
    orbitSpeed: 0.000125 * accelerationOrbit
  },
  {
    size: 1.7,
    texture: callistoTexture,
    orbitRadius: 32,
    orbitSpeed: 0.00006 * accelerationOrbit
  }
];

// ******  PLANET CREATIONS  ******
const mercury = new createPlanet('Mercury', 2.4, 40, 0, mercuryTexture, mercuryBump);
const venus = new createPlanet('Venus', 6.1, 65, 3, venusTexture, venusBump, null, venusAtmosphere);
const earth = new createPlanet('Earth', 6.4, 90, 23, earthMaterial, null, null, earthAtmosphere, earthMoon);
const mars = new createPlanet('Mars', 3.4, 115, 25, marsTexture, marsBump)
// Load Mars moons
marsMoons.forEach(moon => {
  loadObject(moon.modelPath, moon.position, moon.scale, function (loadedModel) {
    moon.mesh = loadedModel;
    mars.planetSystem.add(moon.mesh);
    moon.mesh.traverse(function (child) {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  });
});

const jupiter = new createPlanet('Jupiter', 69 / 4, 200, 3, jupiterTexture, null, null, null, jupiterMoons);
const saturn = new createPlanet('Saturn', 58 / 4, 270, 26, saturnTexture, null, {
  innerRadius: 18,
  outerRadius: 29,
  texture: satRingTexture
});
const uranus = new createPlanet('Uranus', 25 / 4, 320, 82, uranusTexture, null, {
  innerRadius: 6,
  outerRadius: 8,
  texture: uraRingTexture
});
const neptune = new createPlanet('Neptune', 24 / 4, 340, 28, neptuneTexture);
const pluto = new createPlanet('Pluto', 1, 350, 57, plutoTexture)

// ******  PLANETS DATA  ******
const planetData = {
  'Mercury': {
    radius: '2,439.7 km',
    tilt: '0.034°',
    rotation: '58.6 Earth days',
    orbit: '88 Earth days',
    distance: '57.9 million km',
    moons: '0',
    info: 'The smallest planet in our solar system and nearest to the Sun.'
  },
  'Venus': {
    radius: '6,051.8 km',
    tilt: '177.4°',
    rotation: '243 Earth days',
    orbit: '225 Earth days',
    distance: '108.2 million km',
    moons: '0',
    info: 'Second planet from the Sun, known for its extreme temperatures and thick atmosphere.'
  },
  'Earth': {
    radius: '6,371 km',
    tilt: '23.5°',
    rotation: '24 hours',
    orbit: '365 days',
    distance: '150 million km',
    moons: '1 (Moon)',
    info: 'Third planet from the Sun and the only known planet to harbor life.'
  },
  'Mars': {
    radius: '3,389.5 km',
    tilt: '25.19°',
    rotation: '1.03 Earth days',
    orbit: '687 Earth days',
    distance: '227.9 million km',
    moons: '2 (Phobos and Deimos)',
    info: 'Known as the Red Planet, famous for its reddish appearance and potential for human colonization.'
  },
  'Jupiter': {
    radius: '69,911 km',
    tilt: '3.13°',
    rotation: '9.9 hours',
    orbit: '12 Earth years',
    distance: '778.5 million km',
    moons: '95 known moons (Ganymede, Callisto, Europa, Io are the 4 largest)',
    info: 'The largest planet in our solar system, known for its Great Red Spot.'
  },
  'Saturn': {
    radius: '58,232 km',
    tilt: '26.73°',
    rotation: '10.7 hours',
    orbit: '29.5 Earth years',
    distance: '1.4 billion km',
    moons: '146 known moons',
    info: 'Distinguished by its extensive ring system, the second-largest planet in our solar system.'
  },
  'Uranus': {
    radius: '25,362 km',
    tilt: '97.77°',
    rotation: '17.2 hours',
    orbit: '84 Earth years',
    distance: '2.9 billion km',
    moons: '27 known moons',
    info: 'Known for its unique sideways rotation and pale blue color.'
  },
  'Neptune': {
    radius: '24,622 km',
    tilt: '28.32°',
    rotation: '16.1 hours',
    orbit: '165 Earth years',
    distance: '4.5 billion km',
    moons: '14 known moons',
    info: 'The most distant planet from the Sun in our solar system, known for its deep blue color.'
  },
  'Pluto': {
    radius: '1,188.3 km',
    tilt: '122.53°',
    rotation: '6.4 Earth days',
    orbit: '248 Earth years',
    distance: '5.9 billion km',
    moons: '5 (Charon, Styx, Nix, Kerberos, Hydra)',
    info: 'Originally classified as the ninth planet, Pluto is now considered a dwarf planet.'
  }
};


// Array of planets and atmospheres for raycasting
const raycastTargets = [
  mercury.planet, venus.planet, venus.Atmosphere, earth.planet, earth.Atmosphere,
  mars.planet, jupiter.planet, saturn.planet, uranus.planet, neptune.planet, pluto.planet
];

// ******  SHADOWS  ******
renderer.shadowMap.enabled = true;
pointLight.castShadow = true;

//properties for the point light
pointLight.shadow.mapSize.width = 1024;
pointLight.shadow.mapSize.height = 1024;
pointLight.shadow.camera.near = 10;
pointLight.shadow.camera.far = 20;

//casting and receiving shadows
earth.planet.castShadow = true;
earth.planet.receiveShadow = true;
earth.Atmosphere.castShadow = true;
earth.Atmosphere.receiveShadow = true;
earth.moons.forEach(moon => {
  moon.mesh.castShadow = true;
  moon.mesh.receiveShadow = true;
});
mercury.planet.castShadow = true;
mercury.planet.receiveShadow = true;
venus.planet.castShadow = true;
venus.planet.receiveShadow = true;
venus.Atmosphere.receiveShadow = true;
mars.planet.castShadow = true;
mars.planet.receiveShadow = true;
jupiter.planet.castShadow = true;
jupiter.planet.receiveShadow = true;
jupiter.moons.forEach(moon => {
  moon.mesh.castShadow = true;
  moon.mesh.receiveShadow = true;
});
saturn.planet.castShadow = true;
saturn.planet.receiveShadow = true;
saturn.Ring.receiveShadow = true;
uranus.planet.receiveShadow = true;
neptune.planet.receiveShadow = true;
pluto.planet.receiveShadow = true;




function animate() {

  //rotating planets around the sun and itself
  sun.rotateY(0.001 * acceleration);
  mercury.planet.rotateY(0.001 * acceleration);
  mercury.planet3d.rotateY(0.004 * accelerationOrbit);
  venus.planet.rotateY(0.0005 * acceleration)
  venus.Atmosphere.rotateY(0.0005 * acceleration);
  venus.planet3d.rotateY(0.0006 * accelerationOrbit);
  earth.planet.rotateY(0.005 * acceleration);
  earth.Atmosphere.rotateY(0.001 * acceleration);
  earth.planet3d.rotateY(0.001 * accelerationOrbit);
  mars.planet.rotateY(0.01 * acceleration);
  mars.planet3d.rotateY(0.0007 * accelerationOrbit);
  jupiter.planet.rotateY(0.005 * acceleration);
  jupiter.planet3d.rotateY(0.0003 * accelerationOrbit);
  saturn.planet.rotateY(0.01 * acceleration);
  saturn.planet3d.rotateY(0.0002 * accelerationOrbit);
  uranus.planet.rotateY(0.005 * acceleration);
  uranus.planet3d.rotateY(0.0001 * accelerationOrbit);
  neptune.planet.rotateY(0.005 * acceleration);
  neptune.planet3d.rotateY(0.00008 * accelerationOrbit);
  pluto.planet.rotateY(0.001 * acceleration)
  pluto.planet3d.rotateY(0.00006 * accelerationOrbit)

  // Animate Earth's moon
  if (earth.moons) {
    earth.moons.forEach(moon => {
      const time = performance.now();
      const tiltAngle = 5 * Math.PI / 180;

      const moonX = earth.planet.position.x + moon.orbitRadius * Math.cos(time * moon.orbitSpeed);
      const moonY = moon.orbitRadius * Math.sin(time * moon.orbitSpeed) * Math.sin(tiltAngle);
      const moonZ = earth.planet.position.z + moon.orbitRadius * Math.sin(time * moon.orbitSpeed) * Math.cos(tiltAngle);

      moon.mesh.position.set(moonX, moonY, moonZ);
      moon.mesh.rotateY(0.01);
    });
  }
  // Animate Mars' moons
  if (marsMoons) {
    marsMoons.forEach(moon => {
      if (moon.mesh) {
        const time = performance.now();

        const moonX = mars.planet.position.x + moon.orbitRadius * Math.cos(time * moon.orbitSpeed);
        const moonY = moon.orbitRadius * Math.sin(time * moon.orbitSpeed);
        const moonZ = mars.planet.position.z + moon.orbitRadius * Math.sin(time * moon.orbitSpeed);

        moon.mesh.position.set(moonX, moonY, moonZ);
        moon.mesh.rotateY(0.001);
      }
    });
  }

  // Animate Jupiter's moons
  if (jupiter.moons) {
    jupiter.moons.forEach(moon => {
      const time = performance.now();
      const moonX = jupiter.planet.position.x + moon.orbitRadius * Math.cos(time * moon.orbitSpeed);
      const moonY = moon.orbitRadius * Math.sin(time * moon.orbitSpeed);
      const moonZ = jupiter.planet.position.z + moon.orbitRadius * Math.sin(time * moon.orbitSpeed);

      moon.mesh.position.set(moonX, moonY, moonZ);
      moon.mesh.rotateY(0.01);
    });
  }

  // // Rotate asteroids
  // asteroids.forEach(asteroid => {
  //   asteroid.rotation.y += 0.0001;
  //   asteroid.position.x = asteroid.position.x * Math.cos(0.0001 * accelerationOrbit) + asteroid.position.z * Math.sin(0.0001 * accelerationOrbit);
  //   asteroid.position.z = asteroid.position.z * Math.cos(0.0001 * accelerationOrbit) - asteroid.position.x * Math.sin(0.0001 * accelerationOrbit);
  // });

  // ****** OUTLINES ON PLANETS ******
  raycaster.setFromCamera(mouse, camera);

  // Check for intersections
  var intersects = raycaster.intersectObjects(raycastTargets);

  // Reset all outlines
  outlinePass.selectedObjects = [];

  // Only show outlines if popup is not open
  if (intersects.length > 0 && !isInfoShown) {
    const intersectedObject = intersects[0].object;

    // If the intersected object is an atmosphere, find the corresponding planet
    if (intersectedObject === earth.Atmosphere) {
      outlinePass.selectedObjects = [earth.planet];
    } else if (intersectedObject === venus.Atmosphere) {
      outlinePass.selectedObjects = [venus.planet];
    } else {
      // For other planets, outline the intersected object itself
      outlinePass.selectedObjects = [intersectedObject];
    }
  }
// ******  ZOOM IN/OUT  ******
if (isMovingTowardsPlanet) {
  // Smooth lerp with higher factor for more fluid movement
  const lerpFactor = 0.08;
  
  // Move camera and target simultaneously
  camera.position.lerp(targetCameraPosition, lerpFactor);
  controls.target.lerp(targetControlsTarget, lerpFactor);

  // Check if close enough to target
  const cameraDistance = camera.position.distanceTo(targetCameraPosition);
  const targetDistance = controls.target.distanceTo(targetControlsTarget);
  
  if (cameraDistance < 0.1 && targetDistance < 0.1) {
      isMovingTowardsPlanet = false;
      camera.position.copy(targetCameraPosition);
      controls.target.copy(targetControlsTarget);
  }
} else if (isZoomingOut) {
  const lerpFactor = 0.08;
  
  camera.position.lerp(zoomOutTargetPosition, lerpFactor);
  controls.target.lerp(new THREE.Vector3(0, 0, 0), lerpFactor);

  if (camera.position.distanceTo(zoomOutTargetPosition) < 0.5 && controls.target.distanceTo(new THREE.Vector3(0, 0, 0)) < 0.5) {
      isZoomingOut = false;
      camera.position.copy(zoomOutTargetPosition);
      controls.target.set(0, 0, 0);
  }
}  controls.update();
  requestAnimationFrame(animate);
  composer.render();
}
// loadAsteroids('/asteroids/asteroidPack.glb', 1000, 130, 160);
// loadAsteroids('/asteroids/asteroidPack.glb', 3000, 352, 370);

// ******  PRELOAD MOSAIC TEXTURES  ******
let mosaicTexturesReady = false;
const preloadedMosaicTextures = new Map();

function preloadMosaicTextures() {
  const planets = [
    { name: 'Mercury', obj: mercury },
    { name: 'Venus', obj: venus },
    { name: 'Earth', obj: earth },
    { name: 'Mars', obj: mars },
    { name: 'Jupiter', obj: jupiter },
    { name: 'Saturn', obj: saturn },
    { name: 'Uranus', obj: uranus },
    { name: 'Neptune', obj: neptune },
    { name: 'Pluto', obj: pluto }
  ];
  
  let loadedCount = 0;
  const totalPlanets = planets.length;
  
  planets.forEach(({ name, obj }) => {
    const images = getPlanetImagesFromJSON(name);
    
    if (images.length === 0) {
      loadedCount++;
      if (loadedCount === totalPlanets) {
        applyPreloadedTextures();
      }
      return;
    }

    const canvas = document.createElement('canvas');
    const size = 2048;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    const cols = Math.ceil(Math.sqrt(images.length));
    const rows = Math.ceil(images.length / cols);
    const cellWidth = size / cols;
    const cellHeight = size / rows;

    let loadedImages = 0;
    const totalImages = Math.min(images.length, cols * rows);

    images.slice(0, totalImages).forEach((url, index) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      
      img.onload = () => {
        const col = index % cols;
        const row = Math.floor(index / cols);
        const x = col * cellWidth;
        const y = row * cellHeight;
        
        ctx.globalAlpha = 0.9;
        ctx.drawImage(img, x, y, cellWidth, cellHeight);
        ctx.globalAlpha = 1.0;
        
        loadedImages++;
        
        if (loadedImages === totalImages) {
          applyPlanetFilters(ctx, size);
          
          const texture = new THREE.CanvasTexture(canvas);
          texture.needsUpdate = true;
          texture.wrapS = THREE.RepeatWrapping;
          texture.wrapT = THREE.RepeatWrapping;
          
          preloadedMosaicTextures.set(name, texture);
          loadedCount++;
          
          if (loadedCount === totalPlanets) {
            applyPreloadedTextures();
          }
        }
      };
      
      img.onerror = () => {
        loadedImages++;
        if (loadedImages === totalImages) {
          applyPlanetFilters(ctx, size);
          
          const texture = new THREE.CanvasTexture(canvas);
          texture.needsUpdate = true;
          texture.wrapS = THREE.RepeatWrapping;
          texture.wrapT = THREE.RepeatWrapping;
          
          preloadedMosaicTextures.set(name, texture);
          loadedCount++;
          
          if (loadedCount === totalPlanets) {
            applyPreloadedTextures();
          }
        }
      };
      
      img.src = url;
    });
  });
}

function applyPreloadedTextures() {
  const planets = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto];
  
  planets.forEach(planetObj => {
    const texture = preloadedMosaicTextures.get(planetObj.name);
    if (!texture) return;
    
    if (planetObj.name === 'Earth') {
      const mosaicMaterial = new THREE.MeshPhongMaterial({
        map: texture,
        shininess: 5,
        specular: 0x222222,
        transparent: true,
        opacity: 0.85
      });
      mosaicMaterial.userData = planetObj.planet.material.userData;
      planetObj.planet.material = mosaicMaterial;
    } else if (!(planetObj.planet.material.userData.originalTexture instanceof THREE.Material)) {
      planetObj.planet.material.map = texture;
      planetObj.planet.material.shininess = 5;
      planetObj.planet.material.specular = new THREE.Color(0x222222);
      planetObj.planet.material.transparent = true;
      planetObj.planet.material.opacity = 0.85;
      planetObj.planet.material.needsUpdate = true;
    }
  });
  
  mosaicTexturesReady = true;
}

// Start preloading immediately after planets are created
preloadMosaicTextures();

animate();

window.addEventListener('mousemove', onMouseMove, false);
window.addEventListener('mousedown', onDocumentMouseDown, false);
// ******  PLANET DETAILS FUNCTION  ******
function updatePlanetDetails(entry) {
  const details = document.getElementById('planetDetails');
  
  if (!entry) {
    details.innerHTML = '<div style="color: #999; font-style: italic;">Hover over an image to see details</div>';
    return;
  }

  let tableHTML = '<table>';
  
  // Name (Unnamed: 1)
  if (entry['Unnamed: 1']) {
    tableHTML += `<tr><td>Name:</td><td>${entry['Unnamed: 1']}</td></tr>`;
  }
  
  // Perception (Unnamed: 2)
  if (entry['Unnamed: 2']) {
    tableHTML += `<tr><td>Perception:</td><td>${entry['Unnamed: 2']}</td></tr>`;
  }
  
  // Date (Unnamed: 3)
  if (entry['Unnamed: 3']) {
    tableHTML += `<tr><td>Date:</td><td>${entry['Unnamed: 3']}</td></tr>`;
  }
  
  // Who (Unnamed: 4)
  if (entry['Unnamed: 4']) {
    tableHTML += `<tr><td>Who:</td><td>${entry['Unnamed: 4']}</td></tr>`;
  }
  
  // Technique (Unnamed: 5)
  if (entry['Unnamed: 5']) {
    tableHTML += `<tr><td>Technique:</td><td>${entry['Unnamed: 5']}</td></tr>`;
  }
  
  // Key Notes and Discoveries (Unnamed: 6)
  if (entry['Unnamed: 6']) {
    tableHTML += `<tr><td>Key Notes:</td><td>${entry['Unnamed: 6']}</td></tr>`;
  }
  
  tableHTML += '</table>';
  details.innerHTML = tableHTML;
}

// ******  TIMELINE FUNCTIONS  ******
function loadTimeline(planetName) {
  const timeline = document.getElementById('timeline');
  timeline.innerHTML = '';

  // Find all entries for this planet
  // The JSON structure has the planet name in the first column, then all following rows
  // with null in first column belong to that planet until the next planet name appears
  const planetEntries = [];
  let currentPlanet = null;
  
  for (let i = 0; i < sistemaSolareData.length; i++) {
    const entry = sistemaSolareData[i];
    const firstColumn = entry['In what ways the perception of the solar system evolved over the course of human history, from ancient cosmologies to modern science?  Question more specific  (timeline)'];
    
    // Check if this row starts a new planet section
    if (firstColumn && firstColumn !== 'null') {
      currentPlanet = firstColumn;
    }
    
    // Collect entries for the target planet
    if (currentPlanet && currentPlanet.toLowerCase() === planetName.toLowerCase()) {
      planetEntries.push(entry);
    }
    
    // Stop when we reach the next planet (after collecting all images)
    if (currentPlanet && currentPlanet.toLowerCase() !== planetName.toLowerCase() && planetEntries.length > 0) {
      break;
    }
  }

  // Collect all valid images first
  const allImages = [];
  planetEntries.slice(1).forEach((entry, index) => {
    const imageColumns = ['Unnamed: 7', 'Unnamed: 8', 'Unnamed: 9', 'Unnamed: 10', 'Unnamed: 11'];
    imageColumns.forEach(column => {
      const imageUrl = entry[column];
      if (imageUrl && imageUrl !== null && imageUrl !== 'null' && imageUrl.startsWith('http')) {
        allImages.push({ entry, imageUrl });
      }
    });
  });

  // Calculate optimal width based on available space
  const containerWidth = timeline.offsetWidth;
  const totalImages = allImages.length;
  const itemWidth = Math.max(40, Math.floor(containerWidth / totalImages));

  // Create timeline items
  allImages.forEach(({ entry, imageUrl }, index) => {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';
    
    // Create varying heights for visual interest (like books on a shelf)
    const minHeight = 120;
    const maxHeight = 280;
    const height = minHeight + Math.random() * (maxHeight - minHeight);
    timelineItem.style.height = height + 'px';
    timelineItem.style.flexGrow = '1';
    timelineItem.style.flexBasis = itemWidth + 'px';
    
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = entry['Unnamed: 1'] || 'Historical image';
    img.onerror = function() {
      this.parentElement.style.display = 'none';
    };
    
    timelineItem.appendChild(img);
    
    // Add hover event to show preview and update details
    timelineItem.addEventListener('mouseenter', () => {
      updatePlanetDetails(entry);
      showImagePreview(entry, imageUrl, timelineItem);
    });
    timelineItem.addEventListener('mouseleave', hideImagePreview);
    
    timeline.appendChild(timelineItem);
  });
}

let currentPreviewElement = null;
let hideTimeout = null;
let currentHiddenItem = null;

function showImagePreview(entry, imageUrl, itemElement) {
  // Update planet details with current entry
  updatePlanetDetails(entry);
  
  // Clear any pending hide
  if (hideTimeout) {
    clearTimeout(hideTimeout);
    hideTimeout = null;
  }
  
  // If same item, don't recreate
  if (currentPreviewElement && currentPreviewElement.previousSibling === itemElement) {
    return;
  }
  
  // Hide any existing preview immediately
  if (currentPreviewElement && currentPreviewElement.parentNode) {
    currentPreviewElement.parentNode.removeChild(currentPreviewElement);
    currentPreviewElement = null;
  }
  
  // Show previously hidden item
  if (currentHiddenItem) {
    currentHiddenItem.style.display = '';
    currentHiddenItem = null;
  }
  
  // Hide the current item
  itemElement.style.display = 'none';
  currentHiddenItem = itemElement;
  
  const timeline = document.getElementById('timeline');
  
  // Create new preview element
  const preview = document.createElement('div');
  preview.className = 'timeline-image-preview active';
  preview.id = 'activePreview';
  
  // Create image
  const img = document.createElement('img');
  img.src = imageUrl;
  img.alt = entry['Unnamed: 1'] || 'Preview';
  
  // Create info
  const infoDiv = document.createElement('div');
  infoDiv.className = 'preview-info';
  
  let infoHTML = '';
  
  infoDiv.innerHTML = infoHTML;
  
  preview.appendChild(img);
  preview.appendChild(infoDiv);
  
  // Insert preview right after the hovered item
  itemElement.parentNode.insertBefore(preview, itemElement.nextSibling);
  
  currentPreviewElement = preview;
  
  // Add event listeners to preview to keep it visible
  preview.addEventListener('mouseenter', () => {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      hideTimeout = null;
    }
  });
  
  preview.addEventListener('mouseleave', () => {
    hideImagePreview();
  });
}

function hideImagePreview() {
  if (hideTimeout) {
    clearTimeout(hideTimeout);
  }
  
  hideTimeout = setTimeout(() => {
    // Reset planet details to placeholder
    updatePlanetDetails(null);
    
    if (currentPreviewElement && currentPreviewElement.parentNode) {
      currentPreviewElement.classList.remove('active');
      setTimeout(() => {
        if (currentPreviewElement && currentPreviewElement.parentNode) {
          currentPreviewElement.parentNode.removeChild(currentPreviewElement);
        }
        currentPreviewElement = null;
        // Show the hidden item
        if (currentHiddenItem) {
          currentHiddenItem.style.display = '';
          currentHiddenItem = null;
        }
      }, 300);
    }
  }, 100);
}



window.addEventListener('resize', function () {
  if (isInfoShown) {
    renderer.domElement.style.height = '50%';
    renderer.setSize(window.innerWidth, window.innerHeight / 2);
    composer.setSize(window.innerWidth, window.innerHeight / 2);
    camera.aspect = window.innerWidth / (window.innerHeight / 2);
  } else {
    renderer.domElement.style.height = '100%';
    renderer.setSize(window.innerWidth, window.innerHeight);
    composer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
  }
  camera.updateProjectionMatrix();
});
