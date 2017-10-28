function addStars() {
    for (let i = 0; i < 1000; i++) {

        let x = ( Math.random() - 0.5) * 1000;
        let y = (Math.random() - 0.5) * 1000;
        let z = (Math.random() - 0.5) * 1000;
        let star = new Star(x,y,z);
        scene.add(star.mesh);
    }
}

function render(){
    sun.mesh.rotateZ(0.01);
    planet.rotateAroundOrbit();
    //planet.rotateAroundAxis();
    renderer.render(scene,camera);
    requestAnimationFrame(render)
}

let renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('myCanvas'), antialias: true
});
renderer.setClearColor('#010912');
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

let scene = new THREE.Scene();

let sun = new Sun(0,0,3); // add Sun returns Sun
sun.addGlowToSphere();

let planet = new Planet(0,0,2);
planet.addEllipse(1,500);

let camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 3000);
camera.position = new THREE.Vector3(0,0,-3);
camera.lookAt(sun.mesh.position);

let light = new THREE.DirectionalLight(0xffffff,2);
light.position = new THREE.Vector3(0,5,-4)
light.target.position.set(0,5,-4);

let light3 = new THREE.PointLight(0xffffff,5,2,1);
light3.position.set(sun.mesh.position.x,sun.mesh.position.y,sun.mesh.position.z);
//light3.target.position.set(0,0,-4);

addStars();

//scene.add(light);
scene.add(light3);
scene.add(sun.mesh);
scene.add(planet.mesh);
/*
let circleGeometry = path.createPointsGeometry(50);
let circleMaterial = new THREE.LineBasicMaterial({color: 0xff0000});

let ellipse = new THREE.Line(circleGeometry, circleMaterial);
ellipse.position.set(-1, 0, 2)
ellipse.rotateX(Math.PI / 2)
*/



let controls = new THREE.OrbitControls(camera);

controls.object.position.set(0,2,-2);
controls.target = sun.mesh.position
controls.update();

render();
