$(document).ready(function () {
    //alert('Hola Jquery!!!')

    //notació bàsica per recollir valores d'HTML

    // esconde => style.display = 'none'
    // $('p').hide()// accedo a todos los p y los escondo
    // $('#myP2').hide()// accedo al elemento con id myP2 y lo escondo
    // $('.test').hide()// accedo a los elementos con class test y lo escondo

    // altres notacions
    $('p:first').hide()// accedo a todos los elementos p pero solo cojo el primero
    // $('#myBtn').click(function () {// fent servir una funció anònima
    // })
    // $('#myBtn').click(() => {// fent servir una arrow function
    // })
    $('#myBtn').click(clicantBoto)
    // is vull associar més d'un esdevenimemnt a un selector
    $('#myP').on({
        click: function () {
            $(this).css("background-color", 'yellow')
        },
        mouseleave: function () {
            $(this).css('background-color', 'lightblue')
        }
    })

    // recoger el texto paragrafo
    let texto = $('#myP').html()
    console.log(texto)

    // para sobrescribir el texto
    $('#myP').html('Hello DAW 2!!!')
})

function clicantBoto() {
    //alert('He clicat el botó')

    //para recoger el valor de un input
    let valor = $('#myInput').val()
    alert(valor)
}

// Esto seria los mismo que ready() en jquery
// document.addEventListener('DOMContentLoaded', function () {
// })