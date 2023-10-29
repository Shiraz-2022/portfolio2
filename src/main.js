import * as THREE from 'three';
import gsap from "gsap";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { throttle } from "lodash";

// Create scenes
const scene = new THREE.Scene();

// Create geometries
const geometry = new THREE.IcosahedronGeometry(17.423);

// Create materials
const material = new THREE.MeshPhongMaterial({ color: 0x5852d6 });

// Create meshes and add them to scenes

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);



// Set ambient light and directional light for the fifth scene
const light = new THREE.DirectionalLight(0xffffff, 1, 100);
light.position.set(30, 30, 120);
light.intensity = 1.5;
scene.add(light);
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(0, 1, 0);
scene.add(directionalLight);

// Set sizes for each scene
const size = {
   width: window.innerWidth,
    height: window.innerHeight }


// Create cameras and position them
  const camera = new THREE.PerspectiveCamera(
    75,
    size.width / size.height,
    0.1,
    1000
  );

  camera.position.z = 40;
  scene.add(camera);

// Renderers initialization
const renderers = [];
const canvas = document.getElementById("canvas5");


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
};

  const renderer = initializeSceneRenderer(
    scene,
    camera,
    canvas,
    size
  );
 

// OrbitControls initialization for the fifth scene
const controls = new OrbitControls(camera, canvas);
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
  canvas.addEventListener("touchstart", (event) => {
    event.stopPropagation();
  });
}

// Handle window resize event
const handleResize = throttle(() => {
    size.width = window.innerWidth;
    size.height = window.innerHeight;
    camera.aspect = size.width / size.height;
    camera.updateProjectionMatrix();
    renderer.setSize(size.width, size.height);
    renderer.setPixelRatio(window.devicePixelRatio);
  });

// Add event listener for window resize event
window.addEventListener("resize", handleResize);

const loop = () => {
  controls.update();
    renderer.render(scene, camera);

  window.requestAnimationFrame(loop);
};

loop();

// GSAP animation
const tl = gsap.timeline({ defaults: { duration: 1 } });

  tl.fromTo(".navbar", { y: "-100%" }, { y: "0%" });
  tl.fromTo(".heading", { opacity: 0 }, { opacity: 1 });

// Animation loop for the fifth scene
function animate() {
  requestAnimationFrame(animate);
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

document.querySelector('.project_button').addEventListener('click',()=>{
  const hidables = document.querySelectorAll('.hidable');
  hidables.forEach((e)=>{
    e.classList.toggle('hidden');
  });
  if(document.querySelector('.project_button').innerHTML == 'See more'){
  document.querySelector('.project_button').innerHTML = 'See less'
  }
  else{
    document.querySelector('.project_button').innerHTML = 'See more'
  }
});
