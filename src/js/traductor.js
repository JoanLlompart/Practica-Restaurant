// Función para cargar la API de Google Cloud Translation
document.getElementById("translate-button").onclick = function () {
    // Traduce el contenido de la página al idioma seleccionado
    google.translate.element.translate(".", {
        from: "es",
        to: "en"
    });
};

google.translate.element.translate(".translate-text", {
    from: "es",
    to: "en"
});