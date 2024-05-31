document.getElementById('loginForm').addEventListener('submit', function(event) {
    let valid = true;

    // Email
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = 'El correo electrónico no es válido.';
        valid = false;
    } else {
        emailError.textContent = '';
    }

    // Contraseña
    const contraseña = document.getElementById('contraseña').value;
    const contraseñaError = document.getElementById('contraseñaError');
    if (contraseña.trim() === '') {
        contraseñaError.textContent = 'La contraseña es obligatoria.';
        valid = false;
    } else {
        contraseñaError.textContent = '';
    }

    // Evitar el envío del formulario si no es válido
    if (!valid) {
        event.preventDefault();
    }
});