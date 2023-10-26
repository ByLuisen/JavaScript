//crea un objecte
let user = {
    name: "Sofia",
    age: 23
}

document.getElementById("resultados").innerHTML = user.name

console.log(user.name)
user.name = "Carla"//sobreescrivint la propietat
user["age"] = 25
document.getElementById("resultados").innerHTML += user.name
console.log(user)

let user2 = JSON.stringify(user)//cadena
console.log(user2)

let numbers = "[0, 1, 2, 3]" // aquest valor ha vingut des del backend PHP
console.log(numbers)//abans del parse: cadena
numbers = JSON.parse(numbers)
console.log(numbers)//després del parse: array

//vull passar la cadena user 2 a objecte
let user3 = JSON.parse(user2)//passarà de cadena a objecte
console.log(user3)

// classe JS . Un dels mètodes de la classe passara a objecte JS
