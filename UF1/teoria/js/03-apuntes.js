//cuando carte la página
let text;
document.addEventListener("DOMContentLoaded", function () {
    let paisos = ["França", "Portugal", "Itàlia"]

    //paisos[3] = 45 ho pots fer encara que no te gaire sentit
    console.log(paisos)//visualitzo tot l'array
    console.log(paisos[1])//visualitzo el valor de la posició 1
    document.getElementById("resultat").innerHTML = paisos.toString()//passar array a cadena
    document.getElementById("resultat").innerHTML += " " + paisos.length

    //per veure l'array
    for (let index = 0; index < paisos.length; index++) {
        console.log(paisos[index]);
    }

    //per veure l'array. Versio 2
    for (const p of paisos) { //of per a veure el valor // in per a veure l'índex
        console.log(p)
    }

    //per veure l'array. Versio 3
    text = "";//cadena buida

    paisos.forEach(recorregut)//foreach solo espera como argumento una funcion
    console.log(text)

    //funcions callback associades a Array: forEach, map
    const numbers1 = [45, 4, 9, 16, 25]
    const numbers2 = numbers1.map(operaciones)//me devuelve el array con *2 de cada valor
    console.log(numbers2)

    let paisos2 = paisos.map(majuscules)
    console.log(paisos2)

    const anys = [23, 3, 2, 43, 56]
    const perSobre = anys.filter(filtreEdat)
    console.log(perSobre)

    //añadir valores nuevos al array sin necesidad de saber el indice
    paisos.push("Alemanya")
    console.log(paisos)

    //quitar el último valor del array
    paisos.pop()
    console.log(paisos)

    //quitar el primer valor del array
    paisos.shift()
    console.log(paisos)

    //para añadir al principio
    paisos.unshift("España")
    console.log(paisos)
})

function recorregut(value) {
    text += " " + value + " ";
}

function operaciones(value) {
    return value * 2
}

function majuscules(value) {
    return value.toUpperCase()
}

function filtreEdat(value) {
    return value > 23
}