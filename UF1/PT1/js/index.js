//Arrays Ejercicio1
// Creamos array con los meses del año
let meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
// Creamos array con los días de la semana
let dias_semana = ['Domingo', 'Lunes', 'martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
let cronometro = 0

//Arrays Ejercicio2;
let exercici2 = [];
let text;

//cuando cargue la pagina ocultar todos
document.addEventListener("DOMContentLoaded", function () {
  //EJERCICIO1
  document.getElementById("btnIniciar").addEventListener("click", function () {
    //declaramos la variable cronometro

    //hacemos un set interval para que cada segundo haga un +1
    setInterval(function () {
      document.getElementById("cronometro").innerHTML = cronometro
      cronometro++
    }, 1000)
  })

  document.getElementById("btnParar").addEventListener("click", function () {

    setInterval(function () {
      document.getElementById("cronometro").innerHTML = cronometro
      cronometro = 0
    }, stop)
    // Creamos el objeto fecha instanciándolo con la clase Date
    let fecha = new Date();
    //imprimos todo
    document.getElementById("resultat").innerHTML = ("<p>" + dias_semana[fecha.getDay()] + ' día '
      + fecha.getDate() + ' de ' + meses[fecha.getMonth()] + ' de ' + fecha.getUTCFullYear() + ", " + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds() + "</p>");

  });
  //EJERCICIO2
  document.getElementById("anyadirValor").addEventListener("blur", function () {
    //declaramos variables
    let valor = document.getElementById("anyadirValor").value;
    let opcion = document.getElementById("opciones").value;
    //validamos
    if (!isNaN(valor) && valor.length >= 3) {
      if (opcion == "opcion1") {
        exercici2.unshift(valor);
      } else if (opcion = "opcion2") {
        exercici2.push(valor);
      }
    }
    //mostramos el array
    text = ""
    exercici2.forEach(recorregut)
    document.getElementById("mostrarArray").innerHTML = text
    console.log(text)
  });

  //EJERCICIO3
  document.getElementById("btnEdad").addEventListener("click", function () {
    //creamos el patron
    let patron = /^[\p{L}' ]+$/u;
    //creamos las variables
    let nombre = document.getElementById("nombre").value
    //fecha de nacimiento
    let fechaNacimiento = new Date(document.getElementById("fecha").value);
    //fecha actual
    let fechaActual = new Date();

    if (nombre != "" && fecha != " " && patron.test(nombre) && nombre.length >= 3 && nombre.length <= 20) {
      if (fechaNacimiento <= fechaActual && fechaNacimiento.getFullYear() > 1900) {
        //restamos las 2 fechas
        let resta = fechaActual - fechaNacimiento;
        //calculamos la edad
        let calcularEdad = Math.floor(resta / (1000 * 60 * 60 * 24 * 365.25));
        //y lo imprimimos
        document.getElementById("edad").innerHTML = "Tienes " + calcularEdad + " años";
      } else {
        //mensaje de error
        document.getElementById("edad").innerHTML = "La fecha introducida es incorrecta";
      }
    } else {
      //hacemos que desaparezca para que quede el codigo 
      document.getElementById("edad").innerHTML = "";
    }
  });

//ejercicio 4
  document.getElementById("area").addEventListener("input", function () {
    //declaramos la variable
    let texto = document.getElementById("area").value
    texto.toLowerCase()
    
    let contador = 0;
    let contador2 = 0;

    //validaciones y contadores
    for (let index = 0; index < texto.length; index++) {
      if (texto[index] == "a" || texto[index] == "e" || texto[index] == "i" || texto[index] == "o" || texto[index] == "u") {
        contador++
      }
      if (texto[index] == " ") {
        contador2++
      }

    }
    //imprimimos
    document.getElementById("vocales").innerHTML = contador;
    document.getElementById("caracteres totales").innerHTML = texto.length
    document.getElementById("paraules").innerHTML = contador2;
  });



});

function recorregut(value) {
  text += " " + value + " ";
}

