
document.addEventListener('DOMContentLoaded', function () {
    mostrarFecha()
})

document.getElementById('cerrarVentana').addEventListener('click', function () {
    window.close()
})

// Funcion para mostrar fecha
function mostrarFecha() {
    let diaSetmana = ["diumenge", "dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte"];
    let mes = ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"];
    setInterval(function () {
        var fechaActual = new Date();
        var fechaFormateada = "Avui és " + diaSetmana[fechaActual.getDay()] + " dia " + fechaActual.getDate() + " de/d' " + mes[fechaActual.getMonth()] + " de " + fechaActual.getFullYear() + ", " + fechaActual.getHours() + ":" + fechaActual.getMinutes() + ":" + fechaActual.getSeconds();
        document.getElementById("dataAvui").innerHTML = fechaFormateada;
    }, 1000)
}