import * as THREE from "three";
import gsap from "gsap";
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
renderer.setPixelRatio(devicePixelRatio);

// /**
//  * requestAnimationFrame
//  */
// // We will use time-based animation to ensure consistent playback across different devices
// // and performance levels.
// // The time-based approach is based on the time difference between two frames.
// let time = Date.now();
// // Animation Loop
// const animate = () => {
//   renderer.setPixelRatio(devicePixelRatio);

//   const currentTime = Date.now();
//   const deltaTime = currentTime - time;
//   time = currentTime;

//   console.log(deltaTime);

//    mesh.position.x -= 0.01 * deltaTime;

//   renderer.render(scene, camera);
//   //   window.requestAnimationFrame(animate);
// };
// animate();

/**
 * Clock
 */
// It's more easier then Date.now
const clock = new THREE.Clock();

gsap.to(mesh.position, {
  x: 3,
  duration: 5,
  delay: 1,
});

gsap.to(mesh.position, {
  x: 0,
  duration: 5,
  delay: 2,
});

// Animation Loop
const animate = () => {
  renderer.setPixelRatio(devicePixelRatio);
  //   let elapsedTime = clock.getElapsedTime();

  //   camera.position.y = Math.sin(elapsedTime);
  //   camera.position.x = Math.cos(elapsedTime);
  //   camera.lookAt(mesh.position);

  renderer.render(scene, camera);
  window.requestAnimationFrame(animate);
};
animate();
