//-------------------------------------EVENTOS PAGINA DE VALIDACIÓN -----------------------------------------

// valida el nombre
$('#nombre').blur(validarNombre)

// valida la edad
$('#edad').on('blur', validarEdad)

// valida el dni
$('#dni').on('blur', validarDni)

$('#validar').on('click', function () {
    let campo1 = validarNombre()
    let campo2 = validarEdad()
    let campo3 = validarDni()
    if (campo1 && campo2 && campo3) {
        $('#successNombre').text($('#nombre').val())
        $('#successEdad').text($('#edad').val())
        $('#successDni').text($('#dni').val())
    }
})
