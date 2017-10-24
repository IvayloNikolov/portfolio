let renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('myCanvas'), antialias: true
});
renderer.setClearColor('#010912');
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

let scene = new THREE.Scene();

let sphere = new THREE.IcosahedronGeometry(0.3,2);
let material = new THREE.MeshPhongMaterial({
    color: '#ff3920',
    specular: '#ff8848',
    shading: THREE.FlatShading,
    transparent: 1,
    opacity: 1});

let camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 3000);
camera.position.set(0,0,0);
camera.lookAt(new THREE.Vector3(0, 0, 1));


let sphereMesh = new THREE.Mesh(sphere, material);
sphereMesh.position.set(0,0,3);

let light = new THREE.DirectionalLight(0xffffff,1);
light.target.position.set(0,0,-5);

let light2 = new THREE.DirectionalLight(0xffffff,4);
light2.position.set(0,0,0)
light2.target.position.set(0,0,-5)


//scene.add(light);
scene.add(light2);
scene.add(sphereMesh);

function render(){
    //slight2.position.z-=0.1;
    renderer.render(scene,camera);
    requestAnimationFrame(render)
}
for(var i=0; i<500; i++){
    let star = new THREE.IcosahedronGeometry(0.3,2);
}

let controls = new THREE.OrbitControls(camera);

controls.object.position.set(0,0,0);
controls.target = new THREE.Vector3(0, 0, 1);
controls.update();

render()
