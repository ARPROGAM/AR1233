<!-- Include TensorFlow.js in your HTML -->
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/coco-ssd"></script>

<script>
  // Load the COCO-SSD model
  async function loadModel() {
    const model = await cocoSsd.load();
    return model;
  }

  // Function to detect objects in a given image
  async function detectObjects(imageElement) {
    const model = await loadModel();
    const predictions = await model.detect(imageElement);
    console.log(predictions);
    // Handle predictions as needed
  }

  // Example usage
  const imageElement = document.createElement('img');
  imageElement.src = 'path/to/your/image.jpg'; // Replace with the path to an image
  imageElement.onload = () => detectObjects(imageElement);
</script>
