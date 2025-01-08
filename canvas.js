// Get the canvas element and its context
var canvas = document.getElementById('signatureCanvas');
var ctx = canvas.getContext('2d');

// Variables to track the mouse movements
var drawing = false;
var lastX = 0;
var lastY = 0;

// Event listeners to track mouse movements
canvas.addEventListener('mousedown', function(e) {
    drawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
});

canvas.addEventListener('mousemove', function(e) {
    if (drawing) {
        drawLine(lastX, lastY, e.offsetX, e.offsetY);
        lastX = e.offsetX;
        lastY = e.offsetY;
    }
});

canvas.addEventListener('mouseup', function(e) {
    drawing = false;
});

canvas.addEventListener('mouseleave', function(e) {
    drawing = false;
});

// Function to draw a line
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
}

// Function to clear the canvas
function clearSignature() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Function to save the signature
function saveSignature() {
    var dataURL = canvas.toDataURL(); // Get the image data as a URL
    // Here you can send the dataURL to your server or store it in a hidden input field
    alert('Signature saved!');
}
