const toggleButton = document.getElementById('navbar-toggle');
const mobileMenu = document.getElementById('mobile-menu');

toggleButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

function toggleSection(sectionId) {
    var seccion = document.getElementById(sectionId);

    // Verifica si la sección está oculta
    var estaOculta = seccion.style.display === 'none' || window.getComputedStyle(seccion).display === 'none';

    if (estaOculta) {
        seccion.style.display = 'block';
    } else {
        seccion.style.display = 'none';
    }
}

function toggleTarjeta(event) {
    // Obtén la tarjeta específica que se hizo clic
    var tarjeta = event.currentTarget;

    // Encuentra el contenido adicional dentro de la tarjeta específica
    var contenidoAdicional = tarjeta.querySelector('.contenido-adicional');

    // Alternar la clase 'hidden' para mostrar u ocultar el contenido adicional
    contenidoAdicional.classList.toggle("hidden");
}
