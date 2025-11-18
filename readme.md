# Solar System 3D

An interactive 3D visualization of our solar system created with Three.js, allowing you to explore planets, their moons, and asteroids in real-time.

![Solar System 3D](https://via.placeholder.com/800x400/000011/ffffff?text=Solar+System+3D)

## Features

- **Interactive 3D Visualization**: Explore the solar system with smooth orbital controls
- **Realistic Planets**: All 9 planets with accurate textures and relative sizes
- **Moon System**: Realistic orbits for moons of Earth, Mars, Jupiter, and other planets
- **Advanced Visual Effects**:
  - Bloom pass for realistic lighting
  - Outline pass to highlight selected planets
  - Starry background with cubemap
  - Transparent planetary atmospheres
- **Interactivity**:
  - Click planets to zoom and view detailed information
  - Informational popup with astronomical data
  - Mouse controls for 3D navigation
- **Optimizations**: Efficient rendering with WebGL and post-processing

## Technologies Used

- **Three.js** - 3D framework for WebGL
- **Vite** - Build tool and dev server
- **Postprocessing** - Advanced visual effects
- **JavaScript ES6+** - Programming language
- **HTML5/CSS3** - Structure and styling

## Installation

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd solar-system-3d
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**

   The project will be available at `http://localhost:5173`

## Usage

### Basic Navigation
- **Left mouse + drag**: Rotate the view
- **Right mouse + drag**: Pan the camera
- **Mouse wheel**: Zoom in/out

### Planet Interaction
- **Hover**: Highlight the planet with a glowing outline
- **Click**: Automatic zoom on the selected planet
- **Popup**: Display detailed planet information
- **Close popup**: Return to the general solar system view

### Available Planets
- **Mercury** - The planet closest to the Sun
- **Venus** - The hottest planet in the solar system
- **Earth** - Our planet with the Moon
- **Mars** - The red planet with two moons
- **Jupiter** - The gas giant with its 4 main moons
- **Saturn** - The planet with spectacular rings
- **Uranus** - The tilted planet with thin rings
- **Neptune** - The farthest planet from the Sun
- **Pluto** - The dwarf planet

## Project Structure

```
solar-system-3d/
├── src/
│   ├── index.html          # Main HTML
│   ├── script.js           # Three.js logic and interactivity
│   ├── style.css           # CSS styles
│   ├── asteroids/          # 3D asteroid models
│   └── images/             # Textures and materials
│       ├── mars/           # 3D models of Mars' moons
│       └── [planets]/      # Textures for each planet
├── static/                 # Static assets
├── dist/                   # Production build
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
└── readme.md              # This documentation
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Create production build

## Technical Features

### Rendering
- **WebGL Renderer** with cubemap texture support
- **Post-processing pipeline** with bloom and outline effects
- **Shadow mapping** for realistic lighting
- **Tone mapping** ACES Filmic for accurate colors

### Optimizations
- **LOD (Level of Detail)** for optimal performance
- **Automatic frustum culling**
- **Texture compression** for fast loading
- **Efficient memory management**

### Physics and Animations
- **Realistic orbits** based on astronomical data
- **Planetary rotation** with relative speeds
- **Smooth animations** with easing functions
- **Particle system** for asteroids


##  License

