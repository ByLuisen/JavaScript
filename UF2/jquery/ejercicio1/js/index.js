function validarDni() {
    let dni = $('#dni').val()
    let patron = /^\d{8}[a-zA-Z]$/;
    let flag = false
    if (dni == '') {
        document.getElementById("errorDNI").innerHTML = "Debes completar este campo"
        document.getElementById("signUpDNI").style.borderColor = "red"
        flag = false;
    } else if (!patron.test(dni)) {
        document.getElementById("errorDNI").innerHTML = "El DNI introducido no és correcto"
        document.getElementById("signUpDNI").style.borderColor = "red"
        flag = false;
    } else if (patron.test(dni)) {
        if (!verificaDNI()) {
            document.getElementById("errorDNI").innerHTML = "El DNI introducido no es real"
            document.getElementById("signUpDNI").style.borderColor = "red"
            flag = false;
        } else {
            document.getElementById("errorDNI").innerHTML = ""
            document.getElementById("signUpDNI").style.borderColor = "grey"
            flag = true
        }
    }
    return flag
}