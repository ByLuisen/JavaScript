// Constante que almacena el nombre de las ciudades
const ciudades = ["Guadalajara", "Monterrey", "Tepic", "Pachuca",
    "Barcelona", "Madrid", "Valencia", "Mallorca", "Osasuna"]
// Constante del elemento ol con id ciudades
const lista = $('#ciudades')

/**
 * Cuando el documento HTML ha sido completamente cargado se 
 * añaden las ciudades a la lista llamando a la función
 */
$(document).ready(function () {
    //Función que añade las ciudades a la lista
    anyadirCiudades()
})

/**
 * Cuando se clica el botón con id addFinal se ejecuta una función que
 * añade al final de la lista un elemento li
 */
$('#addFinal').click(function () {
    lista.append('<li>Añadido al final</li>')
})
/**
 * Cuando se clica el botón con id addInicio se ejecuta una función que
 * añade al inicio de la lista un elemento li
 */
$('#addInicio').click(function () {
    lista.prepend('<li>Añadido al inicio</li>')
})
/**
 * Cuando se clica al botón con id delFinal se ejecuta una función que
 * elimina el último elemento li de la lista 
 */
$('#delFinal').click(function () {
    $('#ciudades li:last').remove()
})
/**
 * Cuando se clica al botón con id delInicio se ejecuta una función que
 * elimina el primer elemento li de la lista 
 */
$('#delInicio').click(function () {
    $('#ciudades li:first').remove()
})
/**
 * Cuando se clica al botón con id delPrimeroSegundo se ejecuta una función que
 * elimina el primer y segundo elemento li de la lista 
 */
$('#delPrimerSegundo').click(function () {
    $('#ciudades li:first').remove()
    $('#ciudades li:first').remove()
})

/**
 * Función que añade las ciudades a la lista
 */
function anyadirCiudades() {
    // Se vacia el contenido de la lista que hubiese anteriormente
    lista.innerHTML = ""
    // Se recorre el array de ciudades 
    for (let index = 0; index < ciudades.length; index++) {
        // Se cree un elemento li 
        let li = document.createElement("li");
        // Posteriormente se guarda el valor del array en el elemento li
        li.innerHTML = ciudades[index];
        // Finalmente se añade el elemento li al final de la lista
        lista.append(li);
    }
}
