document.addEventListener("DOMContentLoaded", function() {
    const companyName = document.querySelector('.company-name');

    // Cambia el tamaño de la fuente después de que la animación de expansión termine
    setTimeout(() => {
        companyName.style.fontSize = '3 em'; // Tamaño más pequeño

    }, 10000); // Cambiado a 10000 ms para 10 segundos
});
        // JavaScript para mostrar el mensaje de confirmación
        function mostrarMensaje() {
            var mensaje = document.getElementById('mensaje-confirmacion');
            mensaje.classList.add('show'); // Añade la clase para mostrar el mensaje
            setTimeout(function() {
                mensaje.classList.remove('show'); // Oculta el mensaje después de 3 segundos
            }, 3000);
        }

        document.getElementById('whatsapp-btn').addEventListener('click', mostrarMensaje);
        document.getElementById('gmail-btn').addEventListener('click', mostrarMensaje);
        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();
            document.getElementById('mensaje-exito').style.display = 'block';
            this.reset();
        });