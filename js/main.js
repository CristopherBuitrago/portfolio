const mostrarMensaje = (event) => {
    // Prevenir el envío del formulario
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    
    if (nombre.length === 0 || email.length === 0 || mensaje.length === 0) {
        return alert("The fields cannot be blank, please try again.");
    } else {
        alert("Message sent, thanks for contacting me :)");
        // Enviar el formulario después de la validación
        event.target.form.submit();
    }
}
