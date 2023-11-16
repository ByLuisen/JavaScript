'use strict'
// Al cargar la pagina
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem('loged') != null) {
        document.getElementById('iconoUser').classList.add('d-none')
        document.getElementById('logout').classList.replace('d-none', 'd-block')
    } else {
        document.getElementById('iconoUser').classList.replace('d-block', 'd-none')
        document.getElementById('logout').classList.replace('d-block', 'd-none')
    }
    existeCookie()
    contadorVisitas()
    inicializarSelects()
    deshabilitarImagenes()
});

//-------------------------------------EVENTOS BUSCADOR DE VUELOS -----------------------------------------

document.getElementById("radioIdaVuelta").addEventListener("input", estadoCalendarioVuelta)
document.getElementById("radioIda").addEventListener("input", estadoCalendarioVuelta)
document.getElementById("aeropuertoOrigen").addEventListener("input", function () {
    ocultarAeropuerto("aeropuertoOrigen", "aeropuertoDestino")
})
document.getElementById("aeropuertoDestino").addEventListener("input", function () {
    ocultarAeropuerto("aeropuertoDestino", "aeropuertoOrigen")
})
document.getElementById("ida").addEventListener("focus", aeropuertosOK)
document.getElementById("vuelta").addEventListener("focus", aeropuertosOK)
document.getElementById('ida').addEventListener('keydown', deshabilitarEdicion);
document.getElementById("ida").addEventListener("input", function () {
    let fechaIda = new Date(document.getElementById("ida").value)
    let fechaVuelta = new Date(document.getElementById("vuelta").value)
    if (fechaIda > fechaVuelta) {
        actualizarCalendarioVuelta(fechaIda)
    } else {
        actualizarFechaMinima(fechaIda)
    }
    document.getElementById("vuelta").focus()
})
document.getElementById('vuelta').addEventListener('keydown', deshabilitarEdicion);

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
    actualizarCantidad('Adulto', -1, 1, 9)
})
document.getElementById('anadirAdulto').addEventListener('click', function () {
    actualizarCantidad('Adulto', 1, 1, 9);
})

document.getElementById('restarNino').addEventListener('click', function () {
    actualizarCantidad('Nino', -1, 0, 9);
})
document.getElementById('anadirNino').addEventListener('click', function () {
    actualizarCantidad('Nino', 1, 0, 9);
})

document.getElementById('restarBebe').addEventListener('click', function () {
    actualizarCantidad('Bebe', -1, 0, 9);
})
document.getElementById('anadirBebe').addEventListener('click', function () {
    actualizarCantidad('Bebe', 1, 0, 9);
})

document.getElementById('buscarVuelo').addEventListener('click', function () {
    let select1 = document.getElementById('aeropuertoOrigen').value
    let select2 = document.getElementById('aeropuertoDestino').value
    if (select1 != 0 && select2 != 0) {
        generarPlantillaVuelos()
        resumirVuelo()
        document.getElementById('resumenVuelo').classList.replace('d-none', 'd-block')
    } else if (select1 == 0) {
        document.getElementById('aeropuertoOrigen').focus()
    } else {
        document.getElementById('aeropuertoDestino').focus()

    }
})

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
