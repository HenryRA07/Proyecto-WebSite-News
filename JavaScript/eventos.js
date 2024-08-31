function buscarNoticias(event) {
    event.preventDefault(); // Prevenir que el formulario se envíe normalmente

    const query = document.getElementById('searchInput').value.toLowerCase();
    
    if (query.trim() === "") {
        // Si el campo de búsqueda está vacío, recargar la página
        window.location.reload();
        return; // Salir de la función
    }

    const noticias = document.querySelectorAll('.novedad, .proxima-noticia');

    noticias.forEach((noticia) => {
        const textoNoticia = noticia.textContent.toLowerCase();

        if (textoNoticia.includes(query)) {
            noticia.style.display = 'block'; // Mostrar noticia si coincide con la búsqueda
        } else {
            noticia.style.display = 'none'; // Ocultar noticia si no coincide
        }
    });
}

