let clickSound = new Audio('https://www.soundjay.com/button/sounds/button-16.mp3');

function activateCard(card) {
  // Reset all cards
  document.querySelectorAll('.card').forEach(c => {
    c.classList.remove('active');
    c.querySelector('.caption').style.color = '#fff';
  });

  // Add active state to clicked card
  card.classList.add('active');
  const caption = card.querySelector('.caption');

  // Play click sound
  clickSound.currentTime = 0;
  clickSound.play();

  // Flash caption color temporarily
  caption.style.color = '#0ff';
  setTimeout(() => {
    caption.style.color = '';
  }, 1000);
}
