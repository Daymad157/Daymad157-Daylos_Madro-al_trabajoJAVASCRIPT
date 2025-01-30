document.getElementById("presupuesto-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevenir el envío del formulario

  const nombre = document.getElementById("nombre").value.trim();
  const producto = parseInt(document.getElementById("producto").value);
  const plazo = parseInt(document.getElementById("plazo").value);
  const condicionesAceptadas = document.getElementById("condiciones").checked;

  // Calcular el costo de los extras seleccionados
  let extrasCost = 0;
  document.querySelectorAll(".extra:checked").forEach(extra => {
      extrasCost += parseInt(extra.value);
  });

  // Validaciones
  if (!nombre) {
      alert("El nombre es obligatorio.");
      return;
  }

  if (isNaN(plazo) || plazo < 1) {
      alert("Debes ingresar un plazo válido.");
      return;
  }

  if (!condicionesAceptadas) {
      alert("Debes aceptar las condiciones de privacidad.");
      return;
  }

  // Calcular descuento por plazo
  let descuento = 0;
  if (plazo <= 7) {
      descuento = 0.1; // 10% de descuento si el plazo es de 7 días o menos
  } else if (plazo <= 30) {
      descuento = 0.05; // 5% de descuento si el plazo es de 30 días o menos
  }

  const subtotal = producto + extrasCost;
  const descuentoAplicado = subtotal * descuento;
  const total = subtotal - descuentoAplicado;

  // Mostrar el presupuesto final
  document.getElementById("presupuestoFinal").innerHTML = `
      <h3>Presupuesto Final</h3>
      <p>Nombre: ${nombre}</p>
      <p>Producto seleccionado: ${producto}€</p>
      <p>Extras seleccionados: ${extrasCost}€</p>
      <p>Descuento por plazo (${plazo} días): -${descuentoAplicado.toFixed(2)}€</p>
      <p><strong>Total: ${total.toFixed(2)}€</strong></p>
  `;
});

// Actualizar el presupuesto dinámicamente al cambiar cualquier campo
document.querySelectorAll("#producto, .extra, #plazo").forEach(element => {
  element.addEventListener("change", () => {
      document.getElementById("presupuesto-form").dispatchEvent(new Event("submit"));
  });
});
