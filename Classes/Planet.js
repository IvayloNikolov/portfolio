class Planet {
    constructor(x,y,z){
        let sunMaterial = new THREE.MeshPhongMaterial({
            color: '#cb2729',
            emissive: '#f61000',
            specular: '#ff642f',
            shininess: 15,
            shading: THREE.FlatShading,
            transparent: 1,
            opacity: 1
        });
        let sphere = new THREE.IcosahedronGeometry(0.3, 2);
        let sphereMesh = new THREE.Mesh(sphere, sunMaterial);
        sphereMesh.position.set(x,y,z);
        this.mesh = sphereMesh;
    }

}