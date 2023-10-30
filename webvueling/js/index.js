import * as flight from './flight.js';
import { Viaje } from "./clases/viaje.js";

// Al cargar la pagina
document.addEventListener("DOMContentLoaded", function () {
    flight.inicializarSelects()
    flight.deshabilitarImagenes()
});

//-------------------------------------EVENTOS BUSCADOR DE VUELOS -----------------------------------------

document.getElementById("radioIdaVuelta").addEventListener("input", flight.estadoCalendarioVuelta)
document.getElementById("radioIda").addEventListener("input", flight.estadoCalendarioVuelta)
document.getElementById("aeropuertoOrigen").addEventListener("input", function () {
    flight.ocultarAeropuerto("aeropuertoOrigen", "aeropuertoDestino")
})
document.getElementById("aeropuertoDestino").addEventListener("input", function () {
    flight.ocultarAeropuerto("aeropuertoDestino", "aeropuertoOrigen")
})
document.getElementById("ida").addEventListener("focus", flight.aeropuertosOK)
document.getElementById("vuelta").addEventListener("focus", flight.aeropuertosOK)
document.getElementById('ida').addEventListener('keydown', flight.deshabilitarEdicion);
document.getElementById("ida").addEventListener("input", function () {
    let fechaIda = new Date(document.getElementById("ida").value)
    let fechaVuelta = new Date(document.getElementById("vuelta").value)
    if (fechaIda > fechaVuelta) {
        flight.actualizarCalendarioVuelta(fechaIda)
    } else {
        flight.actualizarFechaMinima(fechaIda)
    }
    document.getElementById("vuelta").focus()
})
document.getElementById('vuelta').addEventListener('keydown', flight.deshabilitarEdicion);

document.getElementById('vuelta').addEventListener('input', function () {
    document.getElementById('pasajeros').focus()
})
document.getElementById('pasajeros').addEventListener('click', function () {
    let elemento = document.getElementById('pasajeros-popup')

    if (elemento.classList.contains('d-none')) {
        elemento.classList.replace('d-none', 'd-block')
    } else {
        elemento.classList.replace('d-block', 'd-none')
    }
});

document.getElementById('restarAdulto').addEventListener('click', function () {
    flight.actualizarCantidad('Adulto', -1, 1, 9)
})
document.getElementById('anadirAdulto').addEventListener('click', function () {
    flight.actualizarCantidad('Adulto', 1, 1, 9);
})

document.getElementById('restarNino').addEventListener('click', function () {
    flight.actualizarCantidad('Nino', -1, 0, 9);
})
document.getElementById('anadirNino').addEventListener('click', function () {
    flight.actualizarCantidad('Nino', 1, 0, 9);
})

document.getElementById('restarBebe').addEventListener('click', function () {
    flight.actualizarCantidad('Bebe', -1, 0, 9);
})
document.getElementById('anadirBebe').addEventListener('click', function () {
    flight.actualizarCantidad('Bebe', 1, 0, 9);
})

document.getElementById('buscarVuelo').addEventListener('click', function () {
    let select1 = document.getElementById('aeropuertoOrigen').value
    let select2 = document.getElementById('aeropuertoDestino').value
    if (select1 != 0 && select2 != 0) {
        flight.generarPlantillaVuelos()
        flight.resumirVuelo()
        document.getElementById('resumenVuelo').classList.replace('d-none', 'd-block')
    } else if (select1 == 0) {
        document.getElementById('aeropuertoOrigen').focus()
    } else {
        document.getElementById('aeropuertoDestino').focus()

    }
})

let vuelosIdas = document.getElementsByClassName('IdaEscogida')
vuelosIdas.forEach(function (vuelo) {
    vuelo.addEventListener('click', function() {
        
    })
});

document.getElementById('cancelarBillete').addEventListener('click', function () {
    window.location.href = 'index.html';
    //history.back()
})

document.getElementById('aceptarBillete').addEventListener('click', function () {
    document.getElementById('resumenVuelo').classList.replace('d-block', 'd-none')
    let origen = document.getElementById('aeropuertoOrigen').value
    let destino = document.getElementById('aeropuertoDestino').value
    let ida = document.getElementById('ida').value
    let vuelta = document.getElementById('vuelta').value
    let pasajeros = document.getElementById('pasajeros').value

    let viaje = new Viaje(origen, destino, ida, vuelta, pasajeros)
    document.getElementById('printingVuelo').innerHTML = viaje.printing()
})
