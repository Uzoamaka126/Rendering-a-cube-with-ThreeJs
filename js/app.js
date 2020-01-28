import * as THREE from './three';

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
// Set size at which we want to render our app
// Use the width & height of the area we want to fill our app
// which in this case is the width & height of the browser window
renderer.setSize(window.innerWidth/2, window.innerHeight/2, false);
// Add the renderer element to our HTML document = a canvas element
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add(cube);
camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    renderer.render( scene, camera );
}

animate();