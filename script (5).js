// Function to switch layers
function showLayer(layerNumber) {
  document.querySelectorAll('.layer').forEach(layer => {
    layer.classList.remove('active');
  });
  const nextLayer = document.getElementById(`layer${layerNumber}`);
  nextLayer.classList.add('active');

  // Add playful effects on certain layers
  if (layerNumber === 2 || layerNumber === 3) {
    createHearts(15); // More hearts for extra love!
  }
  if (layerNumber === 5) {
    createConfetti(50);
  }
}

// For Layer 4 and Layer 5, make the "No" button dodge the cursor so that it never gets clicked.
const moveNoButton = (btn) => {
  // Generate random x and y values (in pixels)
  const randomX = Math.floor(Math.random() * 200) - 100; // between -100 and 100px
  const randomY = Math.floor(Math.random() * 200) - 100;
  btn.style.transform = `translate(${randomX}px, ${randomY}px)`;
};

// Add event listener for Layer 4 "No" button
const finalNoBtn = document.getElementById('finalNoBtn');
if (finalNoBtn) {
  finalNoBtn.addEventListener('mouseover', function () {
    moveNoButton(finalNoBtn);
  });
  // Optional: also move on click, so user cannot click it by chance
  finalNoBtn.addEventListener('click', function (e) {
    e.preventDefault();
    moveNoButton(finalNoBtn);
  });
}

// Add event listener for Layer 5 "No" button
const movingNoBtn = document.getElementById('movingNoBtn');
if (movingNoBtn) {
  movingNoBtn.addEventListener('mouseover', function () {
    moveNoButton(movingNoBtn);
  });
  movingNoBtn.addEventListener('click', function (e) {
    e.preventDefault();
    moveNoButton(movingNoBtn);
  });
}

// Confetti Effect
function createConfetti(count = 50) {
  for (let i = 0; i < count; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDelay = Math.random() * 2 + 's';
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 3000);
  }
}

// Heart Animation
function createHearts(count = 10) {
  for (let i = 0; i < count; i++) {
    const heart = document.createElement('div');
    heart.innerHTML = '💖';
    heart.className = 'heart';
    heart.style.left = Math.random() * 95 + 'vw';
    heart.style.top = Math.random() * 90 + 'vh';
    heart.style.animationDelay = Math.random() * 2 + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
  }
}

// WhatsApp Confirmation: Opens your WhatsApp link directly
document.getElementById('whatsAppBtn')?.addEventListener('click', function () {
  const url = 'https://wa.me/qr/DZP7JTUJXKA5I1';
  window.open(url, '_blank');
});

// Mobile Detection (for any extra adjustments, if needed)
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
  document.body.classList.add('mobile');
}
