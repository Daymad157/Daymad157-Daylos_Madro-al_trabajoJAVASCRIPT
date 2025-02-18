document.getElementById("presupuesto-form").addEventListener("submit", function(event) {
    event.preventDefault();
    if (validarFormulario()) {
        alert("Formulario enviado con éxito.");
        // Aquí podrías enviar el formulario a un servidor
    }
});

function validarFormulario() {
    const nombre = document.getElementById("nombre").value.trim();
    const apellidos = document.getElementById("apellidos").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const email = document.getElementById("email").value.trim();

    const nombrePattern = /^[A-Za-z]+$/;
    const telefonoPattern = /^\d{9}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nombre.match(nombrePattern)) {
        alert("El nombre solo puede contener letras.");
        return false;
    }


    if (nombre.length > 15) {
        alert("El nombre no puede tener más de 15 caracteres.");
        return false;
    }

    if (!apellidos.match(nombrePattern)) {
        alert("Los apellidos solo pueden contener letras.");
        return false;
    }

    if (apellidos.length > 40) {
        alert("Los apellidos no pueden tener más de 40 caracteres.");
        return false;
    }

    if (!telefono.match(telefonoPattern)) {
        alert("El teléfono debe contener exactamente 9 dígitos.");
        return false;
    }

    if (!email.match(emailPattern)) {
        alert("Por favor, introduce un correo electrónico válido.");
        return false;
    }

    return;
}

function calcularPresupuesto() {
    const producto = parseInt(document.getElementById("producto").value);
    const plazo = parseInt(document.getElementById("plazo").value);
    let extrasCost = 0;

    document.querySelectorAll(".extra:checked").forEach(extra => {
        extrasCost += parseInt(extra.value);
    });

    let descuento = 0;
    if (plazo <= 7) {
        descuento = 0.1;
    } else if (plazo <= 30) {
        descuento = 0.05;
    }

    const subtotal = producto + extrasCost;
    const descuentoAplicado = subtotal * descuento;
    const total = subtotal - descuentoAplicado;

    document.getElementById("presupuestoFinal").innerHTML = `
        <h3>Presupuesto Final</h3>
        <p>Producto seleccionado: ${producto}€</p>
        <p>Extras seleccionados: ${extrasCost}€</p>
        <p>Descuento por plazo (${plazo} días): -${descuentoAplicado.toFixed(2)}€</p>
        <p><strong>Total: ${total.toFixed(2)}€</strong></p>
    `;
}

document.querySelectorAll("#producto, .extra, #plazo").forEach(element => {
    element.addEventListener("change", calcularPresupuesto);
});