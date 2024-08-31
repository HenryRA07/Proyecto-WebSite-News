
function buscarNoticias(event) {
    event.preventDefault(); // Prevenir que el formulario se envíe normalmente

    const query = document.getElementById('searchInput').value.toLowerCase();
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
