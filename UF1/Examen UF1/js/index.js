/**
   * @file Controla el funcionamiento del documento index.html
   * @author Luis Enrique
*/

//Declarar variables
let select = document.getElementById('articles')
let errorNumber = document.getElementById('errorNumeroArticles')
let botonIntroduir = document.getElementById('introduirArticles')

//Declarar arrays constantes
const ARTICLES = ["Sports clothes", "Sneakers"]
const PRODUCTSCLOTHES = ['Chicago Bulls T-shirt', 'Chicago Bulls pants', 'Adidas T-shirt', 'Adidas pants', 'Nike T-shirt', 'Nike pants',
    'Puma T-shirt', 'Puma pants', 'Joma T-shirt', 'Joma pants']
const PRODUDCTSSNEAKERS = ['Nike Air sneakers', 'Adidas sneakers', 'Nike Jordan sneakers', 'Adidas Forum sneakers', 'Nike Vapor Max sneakers',
    'Puma sneakers', 'Joma sneakers', 'Adidas Star sneakers', 'Joma Running sneakers', 'Puma Running sneakers']

//Al cargar la pagina se inicializaran los selecst
document.addEventListener("DOMContentLoaded", function () {
    inicializarSelectArticles()
})

//Valida el campo para validar el valor introducido
document.getElementById('numeroArticles').addEventListener('blur', function () {
    //se llama a la funcion que valida el valor introducido
    let flag = validarNumeroDeArticles()
    //Si devuelve true se deshabilita el boton
    if (flag) {
        botonIntroduir.disabled = false
    }
})

/* Al hacer clic al boton para introducir se esconde el div anterior y se muestra el div donde el
*  usuario puede escoger que producto quiere 
 */
botonIntroduir.addEventListener('click', function () {
    document.getElementById('formulario1').classList.add('d-none')
    carregarFormulariDinamic()
    document.getElementById('formulario2').classList.replace('d-none', 'd-block')
})

/* Al hacer clic en preparar pedido se mira cuantos articulos ha escogido el usuario 
*  y se valida que no haya escogido mas o menos de los seleccionados anteriormente
*/
document.getElementById('prepararPedido').addEventListener('click', function () {
    let articulosEscogidos = document.getElementsByClassName('articlesSeleccionats')
    let maxArticles = document.getElementById('numeroArticles').value
    let contador = 0

    for (const articulo of articulosEscogidos) {
        if (articulo.checked) {
            contador++
        }
    }
    if (contador < maxArticles) {
        document.getElementById('errorLimitArticles').innerHTML = `El número d'articles escogit no pot ser més petit de ${maxArticles}`
    } else if (contador > maxArticles) {
        document.getElementById('errorLimitArticles').innerHTML = `El número d'articles escogit no pot ser més gran de ${maxArticles}`
    } else {
        window.open('resumenPedido.html')
        document.getElementById('errorLimitArticles').innerHTML = ""
    }
})

/*
* Al hacer clic al boton de cancelar pedido te lleva directamente a la pagina de inicio
*/
document.getElementById('cancelarPedido').addEventListener('click', function () {
    window.location.href = 'index.html';
})


/**
 * Funcion que inicializa los select mediante el array de ARTICLES
 */
function inicializarSelectArticles() {
    for (let i = 0; i < ARTICLES.length; i++) {
        let option = document.createElement("option");
        option.value = ARTICLES[i].split(" ")[0];
        option.innerHTML = ARTICLES[i];
        select.appendChild(option);

    }
}

/**
 * Funcion que valida el numero introducido
 * @returns true si el valor introducido es correcto
 */
function validarNumeroDeArticles() {
    let flag = false
    let numero = document.getElementById("numeroArticles").value
    let patron = /^[0-9]+$/g;
    if (isNaN(numero)) {
        errorNumber.innerHTML = "El valor introduit ha de ser un número"
        flag = false
    } else if (numero > 10) {
        errorNumber.innerHTML = "El valor introduit no pot ser més gran que 10"
        flag = false
    } else if (numero < 1) {
        errorNumber.innerHTML = "El valor introduit no pot ser menor de 1"
        flag = false
    } else if (!patron.test(numero)) {
        errorNumber.innerHTML = "El valor introduit ha de ser un número enter"
        flag = false
    } else {
        errorNumber.innerHTML = ""
        flag = true
    }
    return flag
}

/**
 * Funcion que carga el formulario de los articulos usando una plantilla
 */
function carregarFormulariDinamic() {
    plantillArticles(obtenerOpcionEscogida())
}

/**
 * Funcion que obtine las opciones escogidas del select
 * @returns el array de la opcion seleccionado
 */
function obtenerOpcionEscogida() {
    let opcionEscogida = document.getElementById('articles').value
    if (opcionEscogida == 'Sports') {
        return PRODUCTSCLOTHES
    } else if (opcionEscogida == 'Sneakers') {
        return PRODUDCTSSNEAKERS
    }
}

/**
 * Funcion de plantilla para los articulos
 * @param {*} arrayArticles  array que contiene los articulos
 */
function plantillArticles(arrayArticles) {
    let contenedor = document.getElementById('articlesDinamics')
    for (const article of arrayArticles) {
        let nuevaDiv = document.createElement('div');
        nuevaDiv.className = 'mb-3';
        nuevaDiv.innerHTML = `
        <div class="d-flex align-items-center">
            <div class="w-100">
                <input type="text" class="form-control border-2" value="${article}" readonly disabled>
            </div>
            <div class="ms-5">
                <input class="articlesSeleccionats" type="checkbox">
            </div>
        </div>`

        contenedor.appendChild(nuevaDiv)
    }
}

/**
 * 
 * @param {*} articulosEscogidos 
 */
function mostrarArticulosSeleccionados(articulosEscogidos) {
    let contenedor = document.getElementById('articlesEscogits')

    for (let index = 0; index < articulosEscogidos.length; index++) {
        if (articulosEscogidos[index].checked) {
            let nuevaP = document.createElement('p');
            nuevaP.innerHTML = obtenerOpcionEscogida()[index]
            contenedor.appendChild(nuevaP)
        }
    }
}
