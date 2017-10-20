let renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('myCanvas'), antialias: true
})

renderer.setClearColor(0x011330);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

let camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 1, 3000);
camera.position.z=10;
let scene = new THREE.Scene();

let plane = new THREE.PlaneGeometry(2,2,2)

let material = new THREE.MeshBasicMaterial();

let cube = new THREE.BoxGeometry(2,2,2);
let planeMesh = new THREE.Mesh(plane, material)
let cubeMesh = new THREE.Mesh(cube, material);

cubeMesh.position.set(0,0,-10);
planeMesh.position.set(0,0,-40)

//scene.add(cubeMesh);
scene.add(planeMesh);
renderer.render(scene, camera);

render