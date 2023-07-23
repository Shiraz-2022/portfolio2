import * as THREE from 'three';
import gsap from "gsap";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { throttle } from "lodash";

// Create scenes
const scenes = [
  new THREE.Scene(),
  new THREE.Scene(),
  new THREE.Scene(),
  new THREE.Scene(),
  new THREE.Scene(),
];

// Create geometries
const geometries = [
  new THREE.SphereGeometry(10, 64, 64),
  new THREE.SphereGeometry(10, 64, 64),
  new THREE.SphereGeometry(10, 64, 64),
  new THREE.SphereGeometry(10, 64, 64),
  new THREE.IcosahedronGeometry(17.423),
];

// Create materials
const materials = [
  new THREE.MeshStandardMaterial({ color: "#c8bcaf", roughness: 0.5 }),
  new THREE.MeshStandardMaterial({ color: "#a25f30", roughness: 0.5 }),
  new THREE.MeshStandardMaterial({ color: "#a25f30", roughness: 0.5 }),
  new THREE.MeshStandardMaterial({ color: "#c8bcaf", roughness: 0.5 }),
  new THREE.MeshPhongMaterial({ color: 0xb8860b }),
];

// Create meshes and add them to scenes
const meshes = [];
for (let i = 0; i < 5; i++) {
  const mesh = new THREE.Mesh(geometries[i], materials[i]);
  scenes[i].add(mesh);
  meshes.push(mesh);
}

// Set light for each scene
const lights = [];
for (let i = 0; i < 5; i++) {
  const light = new THREE.DirectionalLight(0xffffff, 1, 100);
  light.position.set(30, 30, 120);
  light.intensity = 1.5;
  scenes[i].add(light);
  lights.push(light);
}

// Set ambient light and directional light for the fifth scene
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scenes[4].add(ambientLight);
lights.push(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(0, 1, 0);
scenes[4].add(directionalLight);
lights.push(directionalLight);

// Set sizes for each scene
const sizes = [
  { width: window.innerWidth, height: window.innerHeight },
  { width: window.innerWidth, height: window.innerHeight },
  { width: window.innerWidth, height: window.innerHeight },
  { width: window.innerWidth, height: window.innerHeight },
  { width: window.innerWidth, height: window.innerHeight },
];

// Create cameras and position them
const cameras = [];
for (let i = 0; i < 5; i++) {
  const camera = new THREE.PerspectiveCamera(
    i === 4 ? 75 : 60,
    sizes[i].width / sizes[i].height,
    0.1,
    1000
  );
  camera.position.z = 40;
  scenes[i].add(camera);
  cameras.push(camera);
}

// Renderers initialization
const renderers = [];
const canvases = [
  document.getElementById("canvas1"),
  document.getElementById("canvas2"),
  document.getElementById("canvas3"),
  document.getElementById("canvas4"),
  document.getElementById("canvas5"),
];

// Initialize renderer for a scene
function initializeSceneRenderer(scene, camera, canvas, sizes) {
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true,
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(sizes.width, sizes.height);
  renderer.render(scene, camera);
  return renderer;
}

for (let i = 0; i < 5; i++) {
  const renderer = initializeSceneRenderer(
    scenes[i],
    cameras[i],
    canvases[i],
    sizes[i]
  );
  renderers.push(renderer);
}

// OrbitControls initialization for the fifth scene
const controls = new OrbitControls(cameras[4], canvases[4]);
controls.enablePan = false;
controls.enableZoom = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 5;

if (window.innerWidth >= 915) {
  controls.enableDamping = true;
  controls.enablePan = true;
} else {
  controls.enableRotate = false; // Disable touch rotation
  controls.enablePan = true; // Enable touch panning
}

if (window.innerWidth <= 915) {
  canvases[4].addEventListener("touchstart", (event) => {
    event.stopPropagation();
  });
}

// Handle window resize event
const handleResize = throttle(() => {
  sizes.forEach((size, index) => {
    size.width = window.innerWidth;
    size.height = window.innerHeight;
    cameras[index].aspect = size.width / size.height;
    cameras[index].updateProjectionMatrix();
    renderers[index].setSize(size.width, size.height);
    renderers[index].setPixelRatio(window.devicePixelRatio);
  });
}, 200);

// Add event listener for window resize event
window.addEventListener("resize", handleResize);

const loop = () => {
  controls.update();
  for (let i = 0; i < 5; i++) {
    renderers[i].render(scenes[i], cameras[i]);
  }
  window.requestAnimationFrame(loop);
};

loop();

// GSAP animation
const tl = gsap.timeline({ defaults: { duration: 1 } });

if (window.innerWidth > 500) {
  meshes.forEach((mesh) => {
    tl.fromTo(mesh.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 });
  });
  tl.fromTo(".navbar", { y: "-100%" }, { y: "0%" });
  tl.fromTo(".heading", { opacity: 0 }, { opacity: 1 });
}

// Animation loop for the fifth scene
function animate() {
  requestAnimationFrame(animate);
  meshes[4].rotation.x += 0.01;
  meshes[4].rotation.y += 0.01;
  renderers[4].render(scenes[4], cameras[4]);
}
animate();
