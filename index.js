// Accessing the camera
const video = document.getElementById("video");
const faceImage = document.getElementById("face-image");

// Function to start the video feed and hide the image
function startCamera() {
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((stream) => {
      video.srcObject = stream;
      video.style.display = "block"; // Show video feed
      faceImage.style.display = "none"; // Hide face image
    })
    .catch((err) => {
      console.error("Error accessing the camera: ", err);
    });
}

// Mood detection simulation function
function detectMood() {
  const isHappy = Math.random() > 0.5; // Random result for demo

  const resultDiv = document.getElementById("result");
  if (isHappy) {
    resultDiv.textContent = "You're happy! Playing upbeat music!";
    resultDiv.style.color = "#4CAF50"; // Green color
    faceImage.src = "happy-face.jpg"; // Show happy face
  } else {
    resultDiv.textContent = "You're not happy. Playing calm music.";
    resultDiv.style.color = "#FF5722"; // Orange color
    faceImage.src = "sad-face.jpg"; // Show sad face
  }

  // Start the camera once mood is detected
  startCamera();
}
