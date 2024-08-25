let scene, camera, renderer, model, uploadedTexture = null;

// Initialize the scene
function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Set up lighting
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(2, 2, 5).normalize();
    scene.add(light);

    // Load the GLB model
    const loader = new THREE.GLTFLoader();
    loader.load('path/to/your/model.glb', function(gltf) {
        model = gltf.scene;
        scene.add(model);
        model.position.set(0, -1, 0); // Adjust model position
        animate();
    });

    camera.position.z = 5;
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// Function to change wall color
function changeWallColor(color) {
    model.traverse(function(node) {
        if (node.isMesh) {
            if (node.name === 'Wall') { // Replace 'Wall' with your actual wall mesh name
                node.material.color.set(color);
            }
        }
    });
}

// Function to change door texture
function changeDoorTexture(texturePath) {
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(texturePath, function(texture) {
        model.traverse(function(node) {
            if (node.isMesh) {
                if (node.name === 'Door') { // Replace 'Door' with your actual door mesh name
                    node.material.map = texture;
                    node.material.needsUpdate = true;
                }
            }
        });
    });
}

// Function to apply uploaded texture
function applyUploadedTexture() {
    if (uploadedTexture) {
        model.traverse(function(node) {
            if (node.isMesh) {
                if (node.name === 'Door') { // Replace 'Door' with your actual door mesh name
                    node.material.map = uploadedTexture;
                    node.material.needsUpdate = true;
                }
            }
        });
    } else {
        alert('No texture uploaded.');
    }
}

// Handle texture file input
document.getElementById('textureInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const textureLoader = new THREE.TextureLoader();
            uploadedTexture = textureLoader.load(e.target.result);
        };
        reader.readAsDataURL(file);
    }
});

// Call init to set everything up
init();
