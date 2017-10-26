class Star {
    constructor(x,y,z){
        let starMaterial = new THREE.MeshBasicMaterial({
            color: '#ffffff',
        });
        let star = new THREE.SphereGeometry(1, 3)
        let starMesh = new THREE.Mesh(star, starMaterial);
        starMesh.position.set(x,y,z);
        this.mesh = starMesh;
    }

}