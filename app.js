let i=1;
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
    let arrayOfv3 = ellipse.geometry.vertices;
    if(i==1) console.log(arrayOfv3)
    let curve = new THREE.CatmullRomCurve3(arrayOfv3);

    let position = curve.getPoint(i);
    let rotation = curve.getTangent(i);

    if(i<=500){
        i+=1;
    }
    else{
        i=1;
    }
    planet.mesh.position.set(position.x, position.y, position.z);
    planet.mesh.rotateX(0.01)
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

let ellipseCurve = new THREE.EllipseCurve(1, 1, 1, 1, 0, 2 * Math.PI, false, 0);
let path = new THREE.Path(ellipseCurve.getPoints(500));
let geometry = path.createPointsGeometry(500);
let material = new THREE.LineBasicMaterial( { color : 0xff0000 } );
let ellipse = new THREE.Line( geometry, material );
ellipse.position.set(-1,0,2);
ellipse.rotateX(Math.PI/2);
ellipse.updateMatrix();
ellipse.geometry.applyMatrix(ellipse.matrix);
ellipse.matrix.identity();
scene.add(ellipse)

let camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 3000);
camera.position = new THREE.Vector3(0,0,3);
camera.lookAt(sun.mesh.position);

let light = new THREE.DirectionalLight(0xffffff,0.6);
light.target.position.set(10,-5,-3);

let light2 = new THREE.DirectionalLight(0xffffff,1);
light2.position.set(0,0,0);
light2.target.position.set(0,3,-4);

let planet = new Planet(0,0,5)

addStars();

scene.add(light);
scene.add(light2);
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

controls.object.position.set(0,2,0);
controls.target = sun.mesh.position
controls.update();

render();
