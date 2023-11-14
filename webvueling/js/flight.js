/**
   * @file Manages the configuration settings for the widget.
   * @author Luis Enrique
*/

let aeropuertos = ['Barcelona España BCN', 'Agadir Marruecos AGA', 'Alicante España ALC',
    'Almería España LEI', 'Amán Jordania AMM', 'Ámsterdam Países Bajos AMS']
let selectOrigen = document.getElementById("aeropuertoOrigen")
let selectDestino = document.getElementById("aeropuertoDestino")
let horasIda = ["10:30", "14:00"]
let horasVuelta = ["20:00", "22:20"]

/**
   * Determina el volumen de un cilindro con la altura y radio especificado
   * @param {number} radio -  El radio de los círculos laterales del cilindro
   * @param {number} altura - La altura del cilindro
   * @return {number}
*/
function generarPlantillaVuelos() {
    plantillaVuelos(horasIda, 'vuelosIda', 'Ida')
    plantillaVuelos(horasVuelta, 'vuelosVuelta', 'Vuelta')
}

function plantillaVuelos(arrayHoras, contenedorId, tipoVuelo) {
    const contenedor = document.getElementById(contenedorId);

    // Limpiar contenido actual del contenedor
    contenedor.innerHTML = ""

    for (let hora of arrayHoras) {
        let nuevaDiv = document.createElement('div');
        nuevaDiv.className = `col-12 mb-3 d-flex p-4 align-items-center border border-success rounded cardVuelos${tipoVuelo}`;
        nuevaDiv.style.backgroundColor = '#F7F7F7';
        let precioAleatorio = (Math.random() * 151).toFixed(2)
        let euros = precioAleatorio.split('.')[0]
        let centimos = precioAleatorio.split('.')[1]

        nuevaDiv.innerHTML = `
    <div class="col-2 col-xxl-1 d-flex">
        <img src="img/${tipoVuelo}.png" alt="${tipoVuelo}" height="25px">
        <p class="ms-2 m-0">${tipoVuelo}</p>
    </div>
    <div class="col-2 text-center">
        <p class="fecha${tipoVuelo} m-0 fw-bold text-secondary"></p>
    </div>
    <div class="col-5 col-xxl-6 d-flex justify-content-between">
        <div class="col-xxl-2"></div>
        <div class="d-flex">
            <p class="m-0 fw-bold me-2">${hora}</p>
            <p class="destino m-0"></p>
        </div>
        <div class="d-flex">
            <p class="origen m-0 me-2"></p>
            <p class="m-0 fw-bold">${hora}</p>
        </div>
        <div class="col-xxl-2"></div>
    </div>
    <button value="${precioAleatorio}" class="botonVuelos${tipoVuelo} btn col-3 col-xxl-3 d-flex justify-content-center align-items-center rounded-pill"
        style="height: 45px; background-color: #FFCC00;">
        <div class="d-flex">
            <h3 class="fw-bold m-0">${euros}</h3>
            <p class="m-0 fw-bold">${centimos} EUR</p>
        </div>
    </button>
`;

        contenedor.appendChild(nuevaDiv);
    }
}

function inicializarSelects() {
    for (let i = 0; i < aeropuertos.length; i++) {
        let optionOrigen = document.createElement("option");
        optionOrigen.value = aeropuertos[i].split(" ")[0];
        optionOrigen.innerHTML = aeropuertos[i];
        let optionDestino = optionOrigen.cloneNode(true); // Clona el elemento para el otro select
        selectOrigen.appendChild(optionOrigen);
        selectDestino.appendChild(optionDestino);
    }
}

function estadoCalendarioVuelta() {
    let radioIdaVuelta = document.getElementById("radioIdaVuelta")
    let radioIda = document.getElementById("radioIda")
    let calendarioVuelta = document.getElementById("vuelta")
    if (radioIdaVuelta.checked) {
        calendarioVuelta.style.display = "block"
    }
    if (radioIda.checked) {
        calendarioVuelta.style.display = "none"
    }
}

function ocultarAeropuerto(select1Id, select2Id) {
    let opcionSeleccionado = document.getElementById(select1Id).value
    let select = document.getElementById(select2Id)
    for (const option of select.options) {
        if (option.value === opcionSeleccionado) {
            option.style.display = "none"; // Oculta la opción seleccionada
        } else {
            option.style.display = "block"; // Muestra las otras opciones
        }
    }
    if (select.value != 0) {
        inicializarCalendarios()
        document.getElementById("ida").focus()
    } else {
        select.focus()
    }
}

function aeropuertosOK() {
    let aeropuertoOrigen = document.getElementById("aeropuertoOrigen").value
    let aeropuertoDestino = document.getElementById("aeropuertoDestino").value
    if (aeropuertoOrigen == 0) {
        document.getElementById("aeropuertoOrigen").focus()
    } else if (aeropuertoDestino == 0) {
        document.getElementById("aeropuertoDestino").focus()
    }
}

// Deshabilitar la edición del campo de entrada
function deshabilitarEdicion(event) {
    event.preventDefault()
}

function inicializarCalendarios() {
    let hoySeisMesesDepues = new Date()
    hoySeisMesesDepues.setMonth(hoySeisMesesDepues.getMonth() + 6)
    let fechaHoySeisMesesDespues = hoySeisMesesDepues.toISOString().split('T')[0]
    inicializarCalendarioIda(fechaHoySeisMesesDespues)
    inicializarCalendarioVuelta(fechaHoySeisMesesDespues)
}

function inicializarCalendarioIda(maxDate) {
    let ida = document.getElementById("ida")
    ida.readOnly = false
    let fechaHoy = new Date().toISOString().split('T')[0]
    ida.value = fechaHoy
    ida.setAttribute('min', fechaHoy)
    ida.setAttribute('max', maxDate)
}

function inicializarCalendarioVuelta(maxDate) {
    let vuelta = document.getElementById("vuelta")
    vuelta.readOnly = false
    let fechaIda = new Date(document.getElementById("ida").value)
    vuelta.setAttribute('min', fechaIda.toISOString().split('T')[0])
    fechaIda.setDate(fechaIda.getDate() + 7)
    let fechaIdaSieteDiasDespues = fechaIda.toISOString().split('T')[0]
    vuelta.value = fechaIdaSieteDiasDespues
    vuelta.setAttribute('max', maxDate)
}

function actualizarCalendarioVuelta(fechaIda) {
    vuelta.setAttribute('min', fechaIda.toISOString().split('T')[0])
    let valorMaximo = document.getElementById("ida").getAttribute('max')
    let fechaMaxima = new Date(valorMaximo)
    if (fechaIda.getTime() == fechaMaxima.getTime()) {
        vuelta.value = document.getElementById("ida").value
    } else {
        fechaIda.setDate(fechaIda.getDate() + 7)
        let fechaIdaSieteDiasDespues = fechaIda.toISOString().split('T')[0]
        vuelta.value = fechaIdaSieteDiasDespues
    }
}

function actualizarFechaMinima(fechaIda) {
    vuelta.setAttribute('min', fechaIda.toISOString().split('T')[0])
}

function resumirVuelo() {
    origenDestinoVuelo()
    let soloIda = tipoVuelo()
    numeroPasajeros()
    fechaVuelo(soloIda)
    seleccionarVuelo('Ida')
    seleccionarOpcionVuelo(seleccionarVuelo('Ida'), seleccionarVuelo('Vuelta'))
    calcularPrecioFinal(soloIda)
}
function origenDestinoVuelo() {
    let origen = obtenerAeropuerto('aeropuertoOrigen', 'origen')
    let destino = obtenerAeropuerto('aeropuertoDestino', 'destino')
    document.getElementById('origenDestinoVuelo').innerHTML = origen + " - " + destino
    document.getElementById('origen-destino').innerHTML = origen + " - " + destino
    document.getElementById('destino-origen').innerHTML = destino + " - " + origen
}
function obtenerAeropuerto(idSelect, idClass) {
    let select = document.getElementById(idSelect);
    let ciudad = select.value
    let aeropuerto = select.options[select.selectedIndex].text.split(" ")
    let elementos = document.getElementsByClassName(idClass)
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].innerHTML = aeropuerto[aeropuerto.length - 1];
    }

    return ciudad
}

function tipoVuelo() {
    let radioIdaVuelta = document.getElementById("radioIdaVuelta")
    let radioIda = document.getElementById("radioIda")
    let mensaje
    let flag = false
    if (radioIdaVuelta.checked) {
        mensaje = "Ida y vuelta"
        document.getElementById("vuelosVuelta").style.display = "block";
        flag = false
    }
    if (radioIda.checked) {
        mensaje = "Solo ida"
        document.getElementById("vuelosVuelta").style.display = "none";
        flag = true
    }
    document.getElementById('infoVuelo').innerHTML = mensaje
    return flag
}

function numeroPasajeros() {
    let numPasajeros = document.getElementById('pasajeros').value
    let mensaje = " | " + numPasajeros + " | "
    document.getElementById('infoVuelo').innerHTML += mensaje
}

function fechaVuelo(soloIda) {
    const mesesAbreviados = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    let ida = new Date(document.getElementById('ida').value)
    let fechaIda = ida.getDate() + " " + mesesAbreviados[ida.getMonth()]
    let elementos = document.getElementsByClassName('fechaIda')
    for (const fecha of elementos) {
        fecha.innerHTML = fechaIda
    }
    let fechaVuelta = ""
    if (!soloIda) {
        let vuelta = new Date(document.getElementById('vuelta').value)
        fechaVuelta = vuelta.getDate() + " " + mesesAbreviados[vuelta.getMonth()]
        let elementos = document.getElementsByClassName('fechaVuelta')
        for (const fecha of elementos) {
            fecha.innerHTML = fechaVuelta
        }
        document.getElementById('infoVuelo').innerHTML += fechaIda + " - " + fechaVuelta
    } else {
        document.getElementById('infoVuelo').innerHTML += fechaIda
    }
}

function seleccionarVuelo(tipoVuelo) {
    let botonVuelos = document.getElementsByClassName(`botonVuelos${tipoVuelo}`)
    Array.from(botonVuelos).forEach(function (boton, index) {
        boton.addEventListener('click', function () {
            let cardVuelos = document.getElementsByClassName(`cardVuelos${tipoVuelo}`)
            Array.from(cardVuelos).forEach(function (card, i) {
                if (i != index) {
                    card.classList.add('d-none')
                }
            })
            return boton.value
        })
    });
}

function seleccionarOpcionVuelo(precioIda, precioVuelta = 0) {
    if (precioIda != undefined) {
        document.getElementById('opcionesVuelo').classList.replace('d-none', 'd-block')
    }
}


function calcularPrecioFinal(vueloIda) {
    // let numPasajeros = document.getElementById('pasajeros').value.split(" ")[0]
    let numAdultos = document.getElementById('totalAdulto').textContent
    let numNino = document.getElementById('totalNino').textContent
    let numBebe = document.getElementById('totalBebe').textContent
    let precioIda = 174.99
    let precioVuelta = 28.99
    let precioIdaTotal = precioIda * numAdultos
    document.getElementById('calcularIda').innerHTML = "Adulto " + numAdultos + " x " + precioIda + " EUR<br>"
    if (!vueloIda) {
        document.getElementById('calcularVuelta').innerHTML = "Adulto " + numAdultos + " x " + precioVuelta + " EUR<br>"
    }
    let precioVueltaTotal = precioVuelta * numAdultos
    if (numNino != 0) {
        let precioNinoIda = (precioIda * (1 - 0.33)).toFixed(2)
        document.getElementById('calcularIda').innerHTML += "Niño " + numNino + " x " + precioNinoIda + " EUR <br>"
        precioIdaTotal += precioNinoIda * numNino
        let precioNinoVuelta = (precioVuelta * (1 - 0.33)).toFixed(2)
        precioVueltaTotal += precioNinoVuelta * numNino
        if (!vueloIda) {
            document.getElementById('calcularVuelta').innerHTML += "Niño " + numNino + " x " + precioNinoVuelta + " EUR <br>"
        }
    }
    if (numBebe != 0) {
        document.getElementById('calcularIda').innerHTML += "Bebé " + numBebe + " x 0,00 EUR"
        if (!vueloIda) {
            document.getElementById('calcularVuelta').innerHTML += "Bebé " + numBebe + " x 0,00 EUR"
        }
    }
    let precioTotal
    if (!vueloIda) {
        document.getElementById('precioVuelta').innerHTML = "Precio vuelta " + precioVueltaTotal + " EUR"
        precioTotal = precioIdaTotal + precioVueltaTotal
    } else {
        precioTotal = precioIdaTotal
        document.getElementById('precioVuelta').innerHTML = ""
        document.getElementById('calcularVuelta').innerHTML = ""
    }
    document.getElementById('precioIda').innerHTML = "Precio ida " + precioIdaTotal + " EUR"
    document.getElementById("euros").innerHTML = precioTotal.toFixed(2).split('.')[0]
    document.getElementById("centimos").innerHTML = precioTotal.toFixed(2).split('.')[1] + " EUR"
}

function deshabilitarImagenes() {
    deshabilitarImagen("restarNino")
    deshabilitarImagen("restarBebe")
    deshabilitarImagen("restarAdulto")
}

function deshabilitarImagen(imgId) {
    var imagen = document.getElementById(imgId);
    imagen.disabled = true;
    imagen.style.opacity = "0.2";
    imagen.style.pointerEvents = "none"; /* La imagen no responderá a eventos de ratón */
}
function habilitarImagen(imgId) {
    var imagen = document.getElementById(imgId);
    imagen.disabled = false;
    imagen.style.opacity = "1";
    imagen.style.pointerEvents = "auto"; /* La imagen responderá a eventos de ratón */
}

function actualizarCantidad(elementoId, cantidad, min, max) {
    let elemento = document.getElementById(`total${elementoId}`);
    let num = parseInt(elemento.textContent) + cantidad;

    if (num < min) {
        num = min;
    } else if (num > max) {
        num = max;
    }
    actualizarValuePasajeros(cantidad)
    elemento.innerHTML = num;
    actualizarLabelPasajeros()

    // Habilitar/deshabilitar las imágenes según la cantidad
    habilitarImagen(`restar${elementoId}`);
    habilitarImagen(`anadir${elementoId}`);

    if (num === min) {
        deshabilitarImagen(`restar${elementoId}`);
    } else if (num === max) {
        deshabilitarImagen(`anadir${elementoId}`);
    }
}

function actualizarValuePasajeros(cantidad) {
    let elemento = document.getElementById('pasajeros')
    let num = parseInt(elemento.value.split(' ')[0]) + cantidad
    let value = ""
    if (num != 1) {
        value = num + ' Pasajeros'
    } else {
        value = num + ' Pasajero'
    }
    elemento.value = value
}

function actualizarLabelPasajeros() {
    let totalAdultos = document.getElementById('totalAdulto').textContent
    let totalNinos = document.getElementById('totalNino').textContent
    let totalBebes = document.getElementById('totalBebe').textContent
    document.getElementsByClassName('recuentoPasajeros')[0].textContent = `${totalAdultos} Adulto${totalAdultos != 1 ? "s" : ""},
    ${totalNinos} Niño${totalNinos != 1 ? "s" : ""}, ${totalBebes} Bebé${totalBebes != 1 ? "s" : ""}`;
}
