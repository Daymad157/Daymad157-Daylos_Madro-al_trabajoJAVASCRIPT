document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario si la validación falla
  
    // Obtener los valores de los campos del formulario
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();
    const incidence = document.getElementById("incidence").value;
  
    let formIsValid = true;
  
    // Validación del nombre
    if (name === "") {
      alert("El nombre es obligatorio.");
      formIsValid = false;
    }
  
    // Validación del correo electrónico
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailPattern)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      formIsValid = false;
    }
  
    // Validación del teléfono (solo 10 dígitos)
    const phonePattern = /^\d{10}$/;
    if (!phone.match(phonePattern)) {
      alert("El número de teléfono debe tener 10 dígitos.");
      formIsValid = false;
    }
  
    // Validación del mensaje
    if (message === "") {
      alert("El mensaje no puede estar vacío.");
      formIsValid = false;
    }
  
    // Validación de la incidencia
    if (incidence === "") {
      alert("Por favor, selecciona una incidencia.");
      formIsValid = false;
    }
  
    // Si todas las validaciones son correctas, enviar el formulario
    if (formIsValid) {
      alert("Formulario enviado con éxito.");
      document.getElementById("myForm").submit(); // Envía el formulario si todo es válido
    }
  });
  