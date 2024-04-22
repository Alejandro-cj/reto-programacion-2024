function generatePassword() {
    const length = Math.floor(Math.random() * 9) + 8; // Longitud aleatoria entre 8 y 16
    const uppercase = Math.random() < 0.5; // Determina si incluir letras mayúsculas
    const numbers = Math.random() < 0.5; // Determina si incluir números
    const symbols = Math.random() < 0.5; // Determina si incluir símbolos

    let charset = 'abcdefghijklmnopqrstuvwxyz'; // Caracteres por defecto (minúsculas)

    if (uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Agrega letras mayúsculas si se requieren
    if (numbers) charset += '0123456789'; // Agrega números si se requieren
    if (symbols) charset += '!@#$%^&*()_+{}[];:,.<>?'; // Agrega símbolos si se requieren

    let password = '';
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    document.getElementById('password').value = password;
}
