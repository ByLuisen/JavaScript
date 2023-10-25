document.addEventListener("DOMContentLoaded", function () {
    let campo1 = false
    let campo2 = false
    //verifico el número
    document.getElementById("numero").addEventListener("blur", function () {
        //recogo el valor de la caja num
        let num = document.getElementById("numero").value
        if (num.length != 8) {
            document.getElementById("errorNum").innerHTML = "Longitud incorrecta"
            campo1 = false;
        } else if (isNaN(num)) {
            document.getElementById("errorNum").innerHTML = "Nomes ha de contenir números"
            campo1 = false;
        } else {
            document.getElementById("errorNum").innerHTML = ""
            campo1 = true
        }
        estadoBoton(campo1, campo2)
    })


    //verifico la letra
    document.getElementById("letra").addEventListener("blur", function () {
        //recogo el valor de la caja letra
        let lletra = document.getElementById("letra").value
        let patron = /[a-z]/i
        if (lletra.length != 1) {
            document.getElementById("errorLetra").innerHTML = "Longitud incorrecta"
            campo2 = false;
        } else if (!patron.test(lletra)) {
            document.getElementById("errorLetra").innerHTML = "Nomes ha de contenir lletres"
            campo2 = false;
        } else {
            document.getElementById("errorLetra").innerHTML = ""
            campo2 = true;
        }
        estadoBoton(campo1, campo2)
    })
    document.getElementById("myBtn").addEventListener("click", function () {
        if (verificaDNI()) {
            document.getElementById("cert").style.color = "green"
            document.getElementById("fals").style.color = "red"
            // document.getElementById("cert").classList.replace("text-danger", "text-success")
            // document.getElementById("cert").classList.toggle("myFunction")
        } else {
            document.getElementById("fals").style.color = "green"
            document.getElementById("cert").style.color = "red"
        }
    })
})

function verificaDNI() {
    let lletra = document.getElementById("letra").value
    let num = document.getElementById("numero").value
    let flag = false
    let letra = "TRWAGMYFPDXBNJZSQVHLCKE"

    let residuo = num % 23
    let letraBuena = letra[residuo]

    if (letraBuena == lletra.toUpperCase()) {
        flag = true
    }
    return flag;
}

function estadoBoton(campo1, campo2) {
    if (campo1 & campo2) {
        document.getElementById("myBtn").disabled = false
    } else {
        document.getElementById("myBtn").disabled = true

    }
}
