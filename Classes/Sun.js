class Sun {
    constructor(x,y,z){
        let sunMaterial = new THREE.MeshToonMaterial({
            color: "#f68f20",
            flatShading: THREE.FlatShading,
            transparent: 1,
            opacity: 1,
            emissive: 0xF66120,
            specular: 0xFFED22,
            shininess: 0,
            shading: THREE.FlatShading,
        });
        let sphere = new THREE.IcosahedronGeometry(0.4, 2);
        let sphereMesh = new THREE.Mesh(sphere, sunMaterial);
        sphereMesh.position.set(x,y,z);
        this.mesh = sphereMesh;
    }
    addGlowToSphere() {
        let glowMesh = new THREEx.GeometricGlowMesh(this.mesh);
        glowMesh.outsideMesh.material.uniforms.coeficient.value = 0.4;
        glowMesh.outsideMesh.material.uniforms.power.value = 2.5;
        glowMesh.outsideMesh.material.uniforms.glowColor.value.set('#F66120')
        glowMesh.insideMesh.material.uniforms.glowColor.value.set('#F66120')
        this.mesh.add(glowMesh.object3d)
    }

}