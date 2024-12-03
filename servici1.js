    // Obtener los botones de contacto
    const whatsappBtn = document.getElementById('whatsapp-btn');
    const gmailBtn = document.getElementById('gmail-btn');

    // Obtener el mensaje de confirmación
    const mensajeConfirmacion = document.getElementById('mensaje-confirmacion');

    // Función para mostrar el mensaje de confirmación
    function mostrarMensaje() {
        mensajeConfirmacion.classList.add('show'); // Agregar la clase para mostrar el mensaje
        
        // Ocultar el mensaje después de 5 segundos (opcional)
        setTimeout(function() {
            mensajeConfirmacion.classList.remove('show');
        }, 5000); // 5 segundos
    }

    // Añadir el evento de clic a ambos botones
    whatsappBtn.addEventListener('click', function(event) {
        mostrarMensaje(); // Mostrar el mensaje al hacer clic
    });

    gmailBtn.addEventListener('click', function(event) {
        mostrarMensaje(); // Mostrar el mensaje al hacer clic
    });