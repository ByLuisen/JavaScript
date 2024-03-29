/**
   * @file Fichero de funciones para la página index.js
   * @author Luis Enrique
*/

/** Constantes para el archivo */
const lista = document.getElementById('animales')
const continentes = ['Europa', 'Àsia', 'Amèrica', 'Oceania', 'Àfrica']

/** Variables para validar campos */
let campo1 = false
let campo2 = false
/**
 * Cuando el documento HTML ha sido completamente cargado se 
 * añaden las ciudades a la lista llamando a la función
 */
document.addEventListener('DOMContentLoaded', function () {
    // Función que cuenta las visitas
    contadorVisitas()
    //Función que lista los animales
    getAnimales()
})

/** Cuando se clica al botón listar se llama a la función que lista los animales */
document.getElementById('listar').addEventListener('click', function () {
    document.getElementById('tablaAnimales').classList.replace('d-none', 'd-block')
    document.getElementById('formulario').classList.replace('d-block', 'd-none')
    document.getElementById('imprimir').innerHTML = "";
    getAnimales()
})

/** Cuando se clica al botón afegir se añade los animales */
document.getElementById('anyadir').addEventListener('click', anyadirAnimal)

document.getElementById('naixement').addEventListener('keydown', deshabilitarEdicion);

document.getElementById("especie").addEventListener("blur", validarEspecie)

document.getElementById("pais").addEventListener("blur", validarPais)

document.getElementById("eliminarCookie").addEventListener("click", function () {
    document.getElementById('eliminarCookie').classList.replace('d-block', 'd-none')
    document.getElementById('visitas').textContent = ""
    setCookie('visitas', 1, -1);
})

document.getElementById("eliminar").addEventListener("click", function () {
    document.getElementById('imprimir').innerHTML = "";
    document.getElementById('formulario').classList.replace('d-block', 'd-none')
    document.getElementById('tablaAnimales').classList.replace('d-none', 'd-block')
    getAnimales(true)
})

document.getElementById('imprimirLocalStorage').addEventListener('click', function () {
    document.getElementById('imprimir').innerHTML = "";
    const animalsArray = JSON.parse(localStorage.getItem('animals'));

    // Verificar si el array existe y no es nulo
    if (animalsArray) {
        // Iterar sobre cada objeto en el array
        animalsArray.forEach(animal => {
            // Iterar sobre las propiedades del objeto
            for (const key in animal) {
                if (Object.hasOwnProperty.call(animal, key)) {
                    // Imprimir cada valor en el elemento con id 'imprimir'
                    document.getElementById('imprimir').innerHTML += `
                    ${key}: ${animal[key]};
                `;
                }
            }
            document.getElementById('imprimir').innerHTML += `<br>`;
        });
    }
})

document.getElementById("afegirAnimal").addEventListener("click", function () {
    let especie = document.getElementById('especie').value
    let sexe = getSexe()
    let naixement = document.getElementById('naixement').value
    let pais = document.getElementById('pais').value
    let continent = document.getElementById('continentes').value

    let animal = new Animal(especie, sexe, naixement, pais, continent)

    fetch('http://localhost:3000/animal/afegir', {
        method: "POST",
        body: JSON.stringify(animal.toObject()),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then(response => {
            if (response.ok) {
                document.getElementById("afegirInfo").innerHTML = "ANIMAL AFEGIT CORRECTAMENT"
                return response.json();
            } else {
                throw new Error('Error en la solicitud: ' + response.statusText);
            }
        })
        .then(json => {
            console.log(json);
            if (!json.error) {
                console.log(json.message)
            }
        })
        .catch(handleGeneralError);
    getAnimales()
})

// Función para manejar los errores generales
const handleGeneralError = (err) => {
    // Imprimir los datos de error en la consola
    console.error(err);

    // Mostrar mensaje de error al usuario de alguna manera (por ejemplo, una alerta)
    alert(err.message || 'Error desconocido');
};

/**
 * Función que carga los selects con los valores extraidos de la base de datos
 */
function getAnimales(eliminar = false) {
    // Ejercicio 1: Realizar la solicitud al backend
    fetch('http://localhost:3000/animales/listar')
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                handleServerError(response);
            }
        })
        .then(json => {
            localStorage.setItem('animals', JSON.stringify(json.resultats))
            listarAnimales(json, eliminar)
        })
        .catch(error => {
            console.error('Error general:', error.message)
        });
}

// Función para imprimir los datos en un elemento "select"
const listarAnimales = (json, eliminar = false) => {
    // Se vacia el contenido de la lista que hubiese anteriormente
    lista.innerHTML = ""
    if (lista) {
        // Iterar sobre los objetos en el array
        // Crear una opción para cada objeto y agregarla al "select"
        json.resultats.forEach(animal => {
            let tr = document.createElement('tr')
            tr.innerHTML = `
            <th scope="col">${animal['id']}</th>
            <td>${animal['especie']}</td>
            <td>${animal['sexe']}</td>
            <td>${animal['any_naixement']}</td>
            <td>${animal['pais']}</td>
            <td>${animal['continent']}</td>  
            `
            if (eliminar) {
                tr.innerHTML += `
                <button class="btn btn-danger fs-5 py-2" onclick="eliminarAnimal(${animal['id']})">Eliminar animal</button>
                `
            }
            lista.appendChild(tr)
        });
    } else {
        console.log('El elemento "select" no se encontró en el documento.');
    }
};

function anyadirAnimal() {
    // Se vacia el contenido de la lista que hubiese anteriormente
    document.getElementById('imprimir').innerHTML = "";
    document.getElementById('tablaAnimales').classList.replace('d-block', 'd-none')
    document.getElementById('formulario').classList.replace('d-none', 'd-block')
    inicializarFechas()
    inicializarSelectContinentes()
}

function inicializarFechas() {
    let fechaMinia = new Date()
    fechaMinia.setMonth(fechaMinia.getMonth() - 12 * 50)
    let fechaHoyCincuentaAnyAtras = fechaMinia.toISOString().split('T')[0]
    inicializarCalendario(fechaHoyCincuentaAnyAtras)
}

function inicializarCalendario(minDate) {
    let ida = document.getElementById("naixement")
    ida.readOnly = false
    let fechaHoy = new Date().toISOString().split('T')[0]
    ida.value = fechaHoy
    ida.setAttribute('max', fechaHoy)
    ida.setAttribute('min', minDate)
}

// Deshabilitar la edición del campo de entrada
function deshabilitarEdicion(event) {
    event.preventDefault()
}

function inicializarSelectContinentes() {
    let select = document.getElementById('continentes')
    for (let index = 0; index < continentes.length; index++) {
        let option = document.createElement("option")
        option.value = continentes[index]
        option.innerHTML = continentes[index]
        select.appendChild(option)
    }
}

function validarEspecie() {
    let especie = document.getElementById("especie").value
    let patron = /^[\p{L}' ]+$/u;
    if (especie == '') {
        document.getElementById("errorEspecie").innerHTML = "Debes completar este campo"
        campo1 = false;
    } else if (especie.length > 50) {
        document.getElementById("errorEspecie").innerHTML = "La especie intorducida no puede superar los 50 carácteres"
        campo1 = false;
    } else if (!patron.test(especie)) {
        document.getElementById("errorEspecie").innerHTML = "Los datos introducidos no son correctos"
        campo1 = false;
    } else {
        document.getElementById("especie").value = especie.trim()
        document.getElementById("errorEspecie").innerHTML = ""
        campo1 = true
    }
    estadoBoton()
}

function validarPais() {
    let pais = document.getElementById("pais").value
    let patron = /^[\p{L}' ]+$/u;
    if (pais == '') {
        document.getElementById("errorPais").innerHTML = "Debes completar este campo"
        campo2 = false;
    } else if (pais.length > 30) {
        document.getElementById("errorPais").innerHTML = "La especie intorducida no puede superar los 30 carácteres"
        campo2 = false;
    } else if (!patron.test(pais)) {
        document.getElementById("errorPais").innerHTML = "Los datos introducidos no son correctos"
        campo2 = false;
    } else {
        document.getElementById("pais").value = pais.trim()
        document.getElementById("errorPais").innerHTML = ""
        campo2 = true;
    }
    estadoBoton()
}

function estadoBoton() {
    if (campo1 && campo2) {
        document.getElementById('afegirAnimal').disabled = false
    }
}

function getSexe() {
    let mascle = document.getElementById('mascle')
    let femella = document.getElementById('femella')

    if (mascle.checked) {
        return 'Mascle'
    } else if (femella.checked) {
        return 'Femella'
    }
}


function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function contadorVisitas() {
    let visitas = 0
    let cvalue = getCookie("visitas");
    if (cvalue != "") {
        cvalue++
        visitas = cvalue
        setCookie('visitas', cvalue, 7);
    } else {
        visitas = 1
        setCookie('visitas', 1, 7);
    }
    document.getElementById('visitas').textContent = visitas
    if (visitas > 10) {
        document.getElementById('eliminarCookie').classList.replace('d-none', 'd-block')
    } else {
        document.getElementById('eliminarCookie').classList.replace('d-block', 'd-none')
    }
}

function eliminarAnimal(animalId) {
    let animal = {
        id: animalId
    }

    fetch('http://localhost:3000/animal/eliminar', {
        method: "POST",
        body: JSON.stringify(animal),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error en la solicitud: ' + response.statusText);
            }
        })
        .then(json => {
            console.log(json);
            if (!json.error) {
                console.log(json.message)
            }
        })
        .catch(handleGeneralError);
    getAnimales(true)
}