function validarNombre() {
    $('#successNombre').text('');
    let nombre = $('#nombre').val();
    let patron = /^[\p{L}'· ]+$/u;
    let flag = false;

    if (nombre === '') {
        $('#errorNombre').text('Debes completar este campo');
        $('#nombre').css('borderColor', 'red');
        flag = false;
    } else if (!patron.test(nombre)) {
        $('#errorNombre').text('Los datos introducidos no son correctos');
        $('#nombre').css('borderColor', 'red');
        flag = false;
    } else {
        $('#errorNombre').text('');
        $('#nombre').val(nombre.trim())
        $('#nombre').css('borderColor', 'grey');
        flag = true;
    }

    return flag;
}

function validarEdad() {
    $('#successEdad').text('');
    let edad = $('#edad').val();
    let patron = /^\d+$/; // Patrón que acepta solo dígitos positivos
    let flag = false

    if (edad === '') {
        $('#errorEdad').text('Debes completar este campo');
        $('#edad').css('borderColor', 'red');
        flag = false;
    } else if (!patron.test(edad)) {
        $('#errorEdad').text('La edad ingresada no es válida');
        $('#edad').css('borderColor', 'red');
        flag = false;
    } else if (edad > 118) {
        $('#errorEdad').text('La edad ingresada no puede ser mayor a 118');
        $('#edad').css('borderColor', 'red');
        flag = false;
    } else if (edad == 0) {
        $('#errorEdad').text('La edad ingresada no puede ser 0');
        $('#edad').css('borderColor', 'red');
        flag = false;
    } else {
        $('#errorEdad').text('');
        $('#edad').val(edad.trim())
        $('#edad').css('borderColor', 'grey');
        flag = true;
    }
    return flag
}

function validarDni() {
    $('#successDni').text('');
    let dni = $('#dni').val();
    let patron = /^\d{8}[a-zA-Z]$/;
    let flag = false;

    if (dni === '') {
        $('#errorDni').text('Debes completar este campo');
        $('#dni').css('borderColor', 'red');
        flag = false;
    } else if (!patron.test(dni)) {
        $('#errorDni').text('El DNI introducido no es correcto');
        $('#dni').css('borderColor', 'red');
        flag = false;
    } else if (patron.test(dni)) {
        if (!verificaDNI()) {
            $('#errorDni').text('El DNI introducido no es real');
            $('#dni').css('borderColor', 'red');
            flag = false;
        } else {
            $('#errorDni').text('');
            $('#dni').val(dni.trim())
            $('#dni').css('borderColor', 'grey');
            flag = true;
        }
    }

    return flag;
}

function verificaDNI() {
    let dni = $('#dni').val();
    let lletra = dni[8];
    let num = dni.slice(0, 8);
    let flag = false;
    let letras = 'TRWAGMYFPDXBNJZSQVHLCKE';

    let residuo = num % 23;
    let letraBuena = letras[residuo];

    if (letraBuena === lletra.toUpperCase()) {
        flag = true;
    }

    return flag;
}