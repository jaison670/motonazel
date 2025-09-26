
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Navegación entre secciones estilo SPA
const links = document.querySelectorAll('nav a[data-section]');
const sections = document.querySelectorAll('.app-section');
const mainContent = document.getElementById('main-content');
const footer = document.querySelector('footer');

// Mostrar solo la sección seleccionada
links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const sectionId = this.getAttribute('data-section');
    mainContent.style.display = 'none';
    sections.forEach(sec => {
      if (sec.id === sectionId) {
        sec.classList.add('active');
      } else {
        sec.classList.remove('active');
      }
    });
    footer.style.display = 'block';
    window.scrollTo({ top: 0, behavior: "smooth" });
    navMenu.classList.remove('show');
  });
});

// Volver al inicio
window.goBack = function() {
  sections.forEach(sec => sec.classList.remove('active'));
  mainContent.style.display = 'block';
  window.scrollTo({ top: 0, behavior: "smooth" });
};
