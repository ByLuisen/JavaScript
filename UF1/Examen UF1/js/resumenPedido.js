/**
   * @file Controla el funcionamiento del documento resumenPedido.html
   * @author Luis Enrique
*/
'use strict'

// Al cargar la página se mostrara la fecha actualmente secuencialmente
document.addEventListener('DOMContentLoaded', function () {
    mostrarFecha()
})

// Al hacer clic al boton cerrarVentana se cerrara la ventana actual
document.getElementById('cerrarVentana').addEventListener('click', function () {
    close().window
})

// Al hacer clic al botón imprimirVentana se dara la opción de poder imprimir la ventana
document.getElementById('imprimirVentana').addEventListener('click', function () {
    print().window
})

// Funcion para mostrar fecha
function mostrarFecha() {
    let fechaActual = new Date()
    fechaFormateada(fechaActual)
    setInterval(function () {
        var fechaActual = new Date();
        fechaFormateada(fechaActual)
    }, 1000)
}

/**
 * Función para formatear la fecha
 * @param {*} fechaActual La fecha actual
 */
function fechaFormateada(fechaActual) {
    let diaSetmana = ["diumenge", "dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte"];
    let mes = ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"];

    let fechaFormateada = "Avui és " + diaSetmana[fechaActual.getDay()] + " dia " + fechaActual.getDate() + " de/d' " + mes[fechaActual.getMonth()] + " de " + 
    fechaActual.getFullYear() + ", " + fechaActual.getHours() + ":" + fechaActual.getMinutes() + ":" + fechaActual.getSeconds();

    document.getElementById("dataAvui").innerHTML = fechaFormateada;
}