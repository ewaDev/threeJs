import * as THREE from "three";

const sizes = {
    width: 800, 
    height: 600,
}

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({
    color: "red"
});
//only one mesh per scene
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);


const camera = new THREE.PerspectiveCamera(75, sizes.width/ sizes.height);
camera.position.z = 3
camera.position.y = 1
camera.position.x = 1
scene.add(camera);

//fov = field of view
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
