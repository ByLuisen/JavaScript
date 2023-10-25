document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("myBtn").addEventListener("click", function () {
        let dia = document.getElementById("dia").value
        let mes = document.getElementById("mes").value
        let año = document.getElementById("año").value

        //salta un error si cualquiera de las cajas no contiene números
        if (isNaN(dia) || isNaN(mes) || isNaN(año)) {
            alert("Por favor, introduce números válidos para el día, mes y año.")
        } else if ((mes < 1 || mes > 12 || dia < 1 || dia > 31 || año < 1900)) {
            alert("Por favor, introduce una fecha válida.");
        } else {
            // Validación adicional para febrero y años bisiestos
            if (mes == 2 && (dia < 1 || dia > 29 || (dia == 29 && !esBisiesto(año)))) {
                alert("Por favor, introduce un día válido para febrero.");
            } else {
                let fechaNacimiento = new Date(año, mes - 1, dia);
                mostrarFecha(fechaNacimiento);
                calcularEdad(fechaNacimiento);
            }
        }
    })
})

function esBisiesto(año) {
    return (año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0);
}

function mostrarFecha(fecha) {
    document.getElementById("fecha").innerHTML = (dias_semana[fecha.getDay()] +
        ' día ' + fecha.getDate() + ' de ' + meses[fecha.getMonth()] + ' del ' + fecha.getUTCFullYear())
}

function calcularEdad(fechaNacimiento) {
    let fechaActual = new Date()
    let diferenciaEnMilisegundos = fechaActual - fechaNacimiento;
    let diferenciaEnAnios = diferenciaEnMilisegundos / (1000 * 60 * 60 * 24 * 365.25);
    var edad = Math.floor(diferenciaEnAnios);
    document.getElementById("edad").innerHTML = "Tienes " + edad + " años"
}

const dias_semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];