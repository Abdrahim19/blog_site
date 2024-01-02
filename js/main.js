


const date = document.getElementById('daynamick_year')
const currentYear = new Date().getFullYear()
date.textContent = currentYear || 2024


const mobileMenu = document.querySelector('nav');
const menuTrigger = document.getElementById('menu-trigger');

menuTrigger.addEventListener('click', (event) => {
  mobileMenu.classList.toggle('show');
});