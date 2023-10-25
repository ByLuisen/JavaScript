//cuando cargue la página
document.addEventListener("DOMContentLoaded", function () {
    //fechas
    let now = new Date()
    // let fecha0 = new Date(0) //primera fecha
    // alert(now)
    //milisegundos dentor del constructor de la clase
    let myDate = new Date(24 * 3600 * 1000)//añadir 24 horas (en milisegundos) a la fecha 0
    // alert(myDate)

    //poner fechas a partir de una cadena
    let date = new Date("2023-08-12")
    // alert(date)

    //poner número a número la fecha
    //año, mes(pensar en mes -1), dia, hora, minuto, segundo, milisegundo
    let date2 = new Date(2023, 8, 12, 8, 0, 25, 2)
    date2 = new Date(2023, 8, 12, 10, 5, 0)
    // alert(date2)
    console.log(date2.getDate())//del 1 al 31
    console.log(date2.getDay())//del 0 domingo al 6 sabado 
    console.log(date2.getFullYear())//año con 4 cifras
    console.log(date2.getHours())//hora en mi zona horaria
    console.log(date2.getUTCHours())//hora de londres -1 (hora de verano)
    date2.setFullYear(2022)//substituyo 2023 por 2022 de la hora anterior
    console.log(date2.getFullYear())//escribir la hora

    document.getElementById("myBtn").addEventListener("click", function () {
        //window.close();//cierra la ventana en la que se encuentra
        //window.open();//abre una nueva ventana en blanco
        //window.open("welcome.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");   
        //URL nombre dell html que quiero abrir
        window.open("welcome.html", "_self")
    })

    //temporizadores
    //cuenta atrás: a los 3 segundos lanza esta función
    // setTimeout(saludo, 3000)//espera 3 segundos
    // setTimeout(function () {
    //     alert("Hello")
    // }, 3000)

    //cuenta atrás: cada 3 segundos lanza esta función
    setInterval(despedida, 5000)
})

function saludo() {
    alert("Hello")
}
function despedida() {
    console.log("Adeu!!!!!")
}