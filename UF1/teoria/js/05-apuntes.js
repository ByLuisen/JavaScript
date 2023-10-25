import { User } from './classes/User.js';
let user = new User("Maria", "Fernández")
console.log(user.printing())
let element = document.getElementById('myDiv')
let select = document.getElementById("myCities");
let ciutats = ["Barcelona", "Girona", "Tarragona", "Lleida"]
//com faria per tenir aquestes ciutats penjant del select que està dins de l'HTML

//crear nodes desde JavaScript
for (let i = 0; i < ciutats.length; i++) {
    let option = document.createElement("option");
    option.value = ciutats[i];
    option.innerHTML = ciutats[i];
    select.appendChild(option);
}

document.getElementById("myBtn").addEventListener("click", () => {
    //fills del select 
    //en formta "array"
    console.log(document.getElementById("myCities").children)//array en format HTMLCollection
    console.log(document.getElementById("myCities").childNodes)//array en format NodeList

    //entrem dins dels "arrays"
    console.log(document.getElementById("myCities").children[0])//el primer fill muestra toda la etiqueta option
    console.log(document.getElementById("myCities").childNodes[0].value)//mostra el value del primer NodeList

    //agafem el primer i el darrer element
    console.log(document.getElementById("myCities").firstChild)//mostra la etiqueta del primer fill
    console.log(document.getElementById("myCities").lastChild.value)//mostra el value de l'ultim fill

    console.log(document.getElementById("myCities").firstElementChild)//mostra toda la etiqueta del primer fill
    console.log(document.getElementById("myCities").lastElementChild.value)//mostra el value de l'ultim fill

    //pare select 
    console.log(document.getElementById("myCities").parentNode)
    console.log(document.getElementById("myCities").parentElement)

    //esborrar un node en particular 
    // document.body.removeChild(document.getElementById("paragraf1"))

    //esborrar el node assenyalat
    document.getElementById("paragraf1").remove()
})

// element.innerHTML = "Texte des de javascript"

// //crear tot un paràgraf dins de myDiv
// let paragraf = document.createElement('p') //crear la etiqueta p
// //un cop creat puc arribar als seus atributs
// paragraf.innerHTML = "Aquest és el meu paràgraf"//afegim texte
// paragraf.style.color = "red"//afegim estil
// paragraf.id = "myP"


// //el paràgraf l'haig d'afegir a algú
// element.appendChild(paragraf)