//-------------------------------------EVENTOS PAGINA DE VALIDACIÓN -----------------------------------------

/**
 * Valida el nombre cuando pierde el foco usando la función 
 * validarNombre
 */
$('#nombre').blur(validarNombre)

/**
 * Valida la edad cuando pierde el foco usando la función 
 * validarEdad
 */
$('#edad').on('blur', validarEdad)

/**
 * Valida el dni cuando pierde el foco usando la función 
 * validarDni
 */
$('#dni').on('blur', validarDni)

/**
 * Evento que cuando se clica al botón con id validar empieza 
 * a validar cada campo del formulario
 */
$('#validar').on('click', function () {
    // Valida el nombre guardando true o false en la variable campo1
    let campo1 = validarNombre()
    // Valida la edad guardando true o false en la variable campo2
    let campo2 = validarEdad()
    // Valida el dni guardando true o false en la variable campo3
    let campo3 = validarDni()
    // Si todos los campos validados son true entra en el if
    if (campo1 && campo2 && campo3) {
        // Muestra por pantalla el nombre validado
        $('#successNombre').text($('#nombre').val())
        // Muestra por pantalla la edad validada
        $('#successEdad').text($('#edad').val())
        // Muestra por pantalla el dni validado
        $('#successDni').text($('#dni').val())
    }
})
