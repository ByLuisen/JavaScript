document.addEventListener('DOMContentLoaded', function () {
    mostrarFecha()
    existeCookie()
    userIsLoged()
})

//-------------------------------------EVENTOS PARA VALIDAR LOGIN -----------------------------------------

document.getElementById("loginBtn").addEventListener("click", function () {
    let email = document.getElementById("loginEmail").value
    let pass = document.getElementById("loginPassword").value
    let campo1 = validarLoginEmail(email)
    let campo2 = validarLoginPassword(pass)
    if (campo1 && campo2) {
        if (validarUsuario(email.trim(), pass.trim())) {
            document.getElementById('signin').classList.replace('d-block', 'd-none')
            inicializarSelects()
            document.getElementById('form').classList.replace('d-none', 'd-block')
        }
    }
})

//-------------------------------------EVENTOS LOGOUT -----------------------------------------

document.getElementById('logout').addEventListener('click', function () {
    localStorage.removeItem('loged')
    window.location.href = 'index.html';
})




