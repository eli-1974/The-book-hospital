const toggleButton = document.querySelector('.header_toggle');
const navMenu = document.querySelector('.header_lista');

toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
