class Sun {
    constructor(x,y,z){
        let sunMaterial = new THREE.MeshToonMaterial({
            color: "#f68f20",
            flatShading: true,
            transparent: 1,
            opacity: 1,
            emissive: 0xF66120,
            specular: 0xFFED22,
            shininess: 1,
        });
        let sphere = new THREE.IcosahedronGeometry(0.4, 2);
        let sphereMesh = new THREE.Mesh(sphere, sunMaterial);
        sphereMesh.position.set(x,y,z);
        this.mesh = sphereMesh;
    }
    addGlowToSphere() {
        let glowMesh = new THREEx.GeometricGlowMesh(this.mesh);
        glowMesh.outsideMesh.material.uniforms.coeficient.value = 0.45;
        glowMesh.outsideMesh.material.uniforms.power.value = 3.5;
        glowMesh.outsideMesh.material.uniforms.glowColor.value.set('#F66120')
        glowMesh.insideMesh.material.uniforms.glowColor.value.set('#F66120')
        this.mesh.add(glowMesh.object3d)
    }

}