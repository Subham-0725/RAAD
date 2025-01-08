const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

function scrollToSection() {
  const section = document.getElementById('new-heading');
  section.scrollIntoView({ behavior: 'smooth' });
}
