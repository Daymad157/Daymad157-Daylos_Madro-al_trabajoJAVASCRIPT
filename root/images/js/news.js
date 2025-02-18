// Función para cargar noticias desde un archivo JSON
function cargarNoticias() {
    const contenedorNoticias = document.getElementById("news");

    fetch('./data/noticias.json')
        .then(response => response.json())
        .then(data => {
            contenedorNoticias.innerHTML = "";
            data.forEach(noticia => {
                const noticiaElement = document.createElement("div");
                noticiaElement.classList.add("noticia");

                const tituloElement = document.createElement("h3");
                tituloElement.textContent = noticia.titulo;

                const fechaElement = document.createElement("p");
                fechaElement.textContent = `Fecha: ${noticia.fecha}`;

                const contenidoElement = document.createElement("p");
                contenidoElement.textContent = noticia.contenido;

                noticiaElement.appendChild(tituloElement);
                noticiaElement.appendChild(fechaElement);
                noticiaElement.appendChild(contenidoElement);
                contenedorNoticias.appendChild(noticiaElement);
            });
        })
        .catch(error => console.error('Error al cargar las noticias:', error));
}

window.onload = cargarNoticias;