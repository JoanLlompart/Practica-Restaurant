const toggleButton = document.getElementById('navbar-toggle');
const mobileMenu = document.getElementById('mobile-menu');

toggleButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

function toggleSection(sectionId) {
    var seccion = document.getElementById(sectionId);

    // Toggle the 'hidden' class to show or hide the section
    seccion.classList.toggle('hidden');

    // Verifica si la sección está oculta después de la toggle
    var estaOculta = seccion.classList.contains('hidden');

    // Manually set the 'display' property based on the current state
    seccion.style.display = estaOculta ? 'flex' : ''; // Si está oculta, muestra como 'flex', de lo contrario, usa el valor predeterminado.
}

function toggleTarjeta(id) {
        // Obtén la tarjeta específica que se hizo clic
        var tarjeta = document.getElementById(id);

        // Encuentra el contenido adicional dentro de la tarjeta específica
        var contenidoAdicional = tarjeta.querySelector('.contenido-adicional');

        // Alternar la clase 'hidden' para mostrar u ocultar el contenido adicional
        contenidoAdicional.classList.toggle("hidden");
    }