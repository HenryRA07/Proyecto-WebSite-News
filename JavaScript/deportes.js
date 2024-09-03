
function buscarNoticias(event) {
    event.preventDefault(); // Prevenir que el formulario se envíe normalmente

    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    const tarjetas = document.querySelectorAll('.mini-item, .news-items');

    let resultadosEncontrados = false;

    tarjetas.forEach((tarjeta) => {
        const titulo = tarjeta.querySelector('h3').textContent.toLowerCase();
        const descripcion = tarjeta.querySelector('p').textContent.toLowerCase();

        if (titulo.includes(query) || descripcion.includes(query)) {
            tarjeta.style.display = 'block'; // Mostrar tarjeta si coincide con la búsqueda
            resultadosEncontrados = true;
        } else {
            tarjeta.style.display = 'none'; // Ocultar tarjeta si no coincide
        }
    });

    if (!resultadosEncontrados) {
        alert('No se encontraron resultados para "' + query + '".');
    }
}