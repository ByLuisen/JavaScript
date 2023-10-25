//var paraula clau VELLA
// var numero = 30;

//let paraula clau NOVA
// let nom = "Sara";
// const lletra = "M";

//Alternatives
// if (numero == 3) {
//     console.log("Cert")
// } else if (numero == 10) {
//     console.log("Fals")
// }

/* 
Això és una condició fent 
servir un operador ternari
*/
// let result = numero == 3 ? "És un 3" : "És un altre número"
// console.log(result)

//bucles
// let i = 0
// do {
//     //instrucciones
//     alert(i)
//     i++
// } while (i < 3);

// let j = 3
// while (j < 3) {
//     alert(j)
// }

// for (let index = 0; index < 3; index++) {
//     console.log(index)
// }

// //alert(nom)
// nom = "Marc"
// console.log(nom)

// let missatge = "Benviguts!";
// alert(missatge);
// missatge = 23;
// console.log(missatge);

// // NaN = Not a Number
// alert("no es un número" / 2);

// let age;
// // // alert(age); aquí JS ens diu undefined

// // //interacció amb l'usuari
// // age = prompt("Digue'm la teva edat", 100);
// // console.log(age);

// // let result;
// // result = confirm("Estas segur que vols continuear?");
// // console.log(result);
// // if (result == true) {
// //   age = 34;
// // } else {
// //   age = 12;
// // }
// // console.log(age);

// //conversions de tipus
// let number = "1"; // es un string
// let suma = Number(number) + 21;
// console.log(suma);

//EXERCICI 1: factorial-------------------------------------------------------------
// let num;
// num = prompt("Introdueix un número:");
// let factorial = num;
// //console.log(num)
// if (isNaN(num)) {
//   // si no es un número
//   alert("Si us play introdueix un número");
// } else {
//   //fem el producte
//   while (num != 1) {
//     num--;
//     factorial *= num;
//   }
// }
// console.log(factorial);
// alert(factorial);

//FUNCIONS
// showMessage();
// let message = "Hallo!";//àmbit de la variable global

// function showMessage() {
//   let message = "Hello!";//àmbit local: dins de la funció té aquesta variable
//   alert(message);
// }

// alert(message);

// function showMessage() {
//   let message = "Allo!";
//   return message;
// }

// alert(showMessage());

// function showMessage(message) {
//   return message + " a tots!!";
// }

// alert(showMessage("Hola"));

// function showMessage(message = "Bon dia") { //texte per defecte "Bon dia "
//     return message + " a tots!!"
// }
// // alert(showMessage("Hola"));
// alert(showMessage());

//funcions anònimes
// let salutacio = function () {
//   return "Hola";
// };
// alert(salutacio());

//funcions fletxa
// let salutacio = (message) => {
//   return "Hola arrow function " + message;
// };

// alert(salutacio("saludos"));

//EXERCICI 1: factorial-------------------------------------------------------------

//aquestes variables tenen àmbit global
let num1;
let num2;
num1 = prompt("Introdueix el primer número:", 0);
num2 = prompt("Introdueix el segon número:", 0);

if (isNaN(num1) || isNaN(num2)) {
  // si no es un número
  alert("Uno de los valores introducidos no es un número");
} else {
  //funciones fletxa
  //Cal ficar-les abans de cridar
  let sumar = () => {
    return Number(num1) + Number(num2);
  };
  let restar = () => {
    return (resta = num1 - num2);
  };
  let multiplicar = () => {
    return (resta = num1 * num2);
  };
  let dividir = () => {
    return (resta = num1 / num2);
  };

  //funcions anonimes
  //Cal ficar-les abans de cridar
  /*   let sumar = function () {
    return Number(num1) + Number(num2);
  };

  let restar = function () {
    return (resta = num1 - num2);
  };

  let multiplicar = function () {
    return (resta = num1 * num2);
  };

  let dividir = function () {
    return (resta = num1 / num2);
  }; */

  let add = sumar();
  let diff = restar();
  let prod = multiplicar();
  let div = dividir();
  alert(
    "Suma: " +
      add +
      "; Resta: " +
      diff +
      "; Multiplicación: " +
      prod +
      "; División: " +
      div
  );
}

/* function sumar() {
  let suma = Number(num1) + Number(num2);
  console.log(suma);
  alert("Suma: " + suma);
}

function restar() {
  let resta = num1 - num2;
  console.log(resta);
  alert("Resta: " + resta);
}

function multiplicar() {
  let multi = num1 * num2;
  console.log(multi);
  alert("Multiplicación: " + multi);
}

function dividir() {
  let divisio = num1 / num2;
  console.log(divisio);
  alert("División: " + divisio);
} */
