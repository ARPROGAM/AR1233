const container = document.getElementById('ar-container');

const modelViewer = document.createElement('model-viewer');
modelViewer.setAttribute('src', 'path/to/your/model.glb'); // Replace with your GLB file path
modelViewer.setAttribute('alt', 'A 3D model of a house');
modelViewer.setAttribute('auto-rotate', true);
modelViewer.setAttribute('camera-controls', true);
modelViewer.style.width = '100%';
modelViewer.style.height = '100%';

container.appendChild(modelViewer);

// Optional: Add event listeners or additional functionality here
