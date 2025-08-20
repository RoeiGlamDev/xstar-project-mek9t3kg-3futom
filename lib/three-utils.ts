import * as THREE from 'three'; // Importing Three.js library

// Function to create a basic scene
export const createScene = () => {
    const scene = new THREE.Scene(); // Create a new scene
    scene.background = new THREE.Color(0xffffff); // Set background color to white
    return scene;
};

// Function to create a camera
export const createCamera = (width: number, height: number) => {
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000); // Create a perspective camera
    camera.position.z = 5; // Set camera position
    return camera;
};

// Function to create a renderer
export const createRenderer = (width: number, height: number) => {
    const renderer = new THREE.WebGLRenderer({ antialias: true }); // Create a WebGL renderer
    renderer.setSize(width, height); // Set renderer size
    return renderer;
};

// Function to add a 3D object (cube) to the scene
export const addCubeToScene = (scene: THREE.Scene) => {
    const geometry = new THREE.BoxGeometry(); // Create a cube geometry
    const material = new THREE.MeshStandardMaterial({ color: 0xffa500 }); // Create a material with orange color
    const cube = new THREE.Mesh(geometry, material); // Create a mesh with geometry and material
    scene.add(cube); // Add cube to the scene
    return cube;
};

// Function to animate the scene
export const animate = (renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.PerspectiveCamera) => {
    const animateFrame = () => {
        requestAnimationFrame(animateFrame); // Request next frame
        renderer.render(scene, camera); // Render the scene
    };
    animateFrame(); // Start animation
}; 

// Function to handle window resize
export const handleResize = (renderer: THREE.WebGLRenderer, camera: THREE.PerspectiveCamera) => {
    const resizeHandler = () => {
        const width = window.innerWidth; // Get window width
        const height = window.innerHeight; // Get window height
        renderer.setSize(width, height); // Update renderer size
        camera.aspect = width / height; // Update camera aspect ratio
        camera.updateProjectionMatrix(); // Update camera projection matrix
    };
    window.addEventListener('resize', resizeHandler); // Add resize event listener
}; 

export default { createScene, createCamera, createRenderer, addCubeToScene, animate, handleResize }; // Default export of utility functions