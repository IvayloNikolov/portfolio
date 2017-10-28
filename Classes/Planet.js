class Planet {
    constructor(x,y,z){
        let planetMaterial = new THREE.MeshStandardMaterial({
            color: '#cb2729',
            emissive: '#f61000',
            specular: '#ff642f',
            shininess: 0,
            flatShading: true,
            transparent: 1,
            opacity: 1
        });
        let sphere = new THREE.IcosahedronGeometry(0.3, 2);
        let sphereMesh = new THREE.Mesh(sphere, planetMaterial);
        this.NumberOfRotations = 0;
        sphereMesh.position.set(x,y,z);
        this.mesh = sphereMesh;
    }
    rotateAroundOrbit(){
        let arrayOfv3 = this.ellipse.geometry.vertices;
        let curve = new THREE.CatmullRomCurve3(arrayOfv3);
        let position = curve.getPoint(this.NumberOfRotations);
        let rotation = curve.getTangent(this.NumberOfRotations);
        this.mesh.position.set(position.x, position.y, position.z);
        this.mesh.rotation.set(rotation.x, rotation.y, rotation.z);
        this.NumberOfRotations+=1;
    }
    rotateAroundAxis(){
        planet.mesh.rotateX(0.005);
    }
    get NumberOfRotations(){
        return this.numberOfRotations;
    }
    set NumberOfRotations(val){

        if(this.NumberOfRotations < this.pathOrbitPoints){
            this.numberOfRotations=val;
        }
        else{
            this.numberOfRotations = 1;
        }

    }
    addEllipse(size, points){
        this.pathOrbitPoints = points;
        let ellipseCurve = new THREE.EllipseCurve(size, 1, 1, 1, 0, 2 * Math.PI, false, 0);
        let path = new THREE.Path(ellipseCurve.getPoints(points));
        let geometry = path.createPointsGeometry(points);
        let material = new THREE.LineBasicMaterial( { color : 0xff0000 } );
        let ellipse = new THREE.Line( geometry, material );
        ellipse.position.set(-1,0,2);
        ellipse.rotateX(Math.PI/2);
        ellipse.updateMatrix();
        ellipse.geometry.applyMatrix(ellipse.matrix);
        ellipse.matrix.identity();
        this.ellipse = ellipse;
    }
}