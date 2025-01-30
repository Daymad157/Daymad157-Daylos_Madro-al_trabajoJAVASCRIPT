// Array de noticias
const noticias = [
    { titulo: "Nueva llegada de producto", fecha: "5/12/2024", contenido: "Nuestra nueva línea de productos estará disponible a partir del 5 de diciembre." },
    { titulo: "Oferta especial por tiempo limitado", fecha: "30/11/2024", contenido: "Disfruta de un 20% de descuento en todos nuestros productos hasta fin de mes." },
    { titulo: "Apertura de nueva tienda", fecha: "10/12/2024", contenido: "Inauguramos una nueva tienda en el centro de la ciudad. ¡No te la pierdas!" },
    { titulo: "Evento exclusivo para clientes", fecha: "15/12/2024", contenido: "Acompáñanos en nuestro evento exclusivo para clientes y conoce nuestros próximos lanzamientos." }
];

// Función para cargar las noticias dinámicamente
function cargarNoticias() {
    const contenedorNoticias = document.getElementById("news");

    // Limpiamos el contenido actual
    contenedorNoticias.innerHTML = "";

    // Creamos las noticias y las añadimos al contenedor
    noticias.forEach(noticia => {
        const noticiaElement = document.createElement("div");
        noticiaElement.classList.add("noticia");

        const tituloElement = document.createElement("h3");
        tituloElement.textContent = noticia.titulo;

        const fechaElement = document.createElement("p");
        fechaElement.textContent = `Fecha: ${noticia.fecha}`;

        const contenidoElement = document.createElement("p");
        contenidoElement.textContent = noticia.contenido;

        // Añadir los elementos al contenedor de noticias
        noticiaElement.appendChild(tituloElement);
        noticiaElement.appendChild(fechaElement);
        noticiaElement.appendChild(contenidoElement);
        contenedorNoticias.appendChild(noticiaElement);
    });
}

// Cargar las noticias al cargar la página
window.onload = cargarNoticias;
