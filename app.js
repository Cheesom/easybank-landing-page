const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.bg-overlay');
const navLinks = document.querySelector('.nav-links');
const lists = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  overlay.classList.toggle('open');
  hamburger.classList.toggle('toggle');
});
