let text;
//cuando cargue la página
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("myBtn").addEventListener("click", function () {
        //recoger los valores de las cajas
        //primera manera de guardar los valores
        // let temp1 = document.getElementById("temp1").value
        // let temp2 = document.getElementById("temp2").value
        // let temp3 = document.getElementById("temp3").value
        // let temp4 = document.getElementById("temp4").value
        // let temp5 = document.getElementById("temp5").value
        // let temp6 = document.getElementById("temp6").value
        // let temp7 = document.getElementById("temp7").value
        // let temp8 = document.getElementById("temp8").value
        // let temp9 = document.getElementById("temp9").value
        // let temp10 = document.getElementById("temp10").value

        let temperatures = []
        let error = ""
        //recoger las temperatures y validar
        for (let i = 1; i < 11; i++) {
            if (isNaN(document.getElementById("temp" + 1).value)) {
                document.getElementById("temp" + i).value = ""
                // document.getElementById("error" + 1).classList.replace("d-none", "d-block")
            } else {
                temperatures.push(document.getElementById("temp" + i).value)
            }
        }

        console.log(temperatures)
        let comptadors = []//contendra las repeticiones de cada temperatura
        let uniques = []//contendra las temperaturas sin repetir
        //recorro tempearaturas
        for (let index = 0; index < temperatures.length; index++) {
            if (uniques.includes(temperatures[index])) {
                //averiguar en que posicion esta temperaturas dentro de unicas
                let posicio = uniques.indexOf(temperatures[index])
                comptadors[posicio] += 1
            } else {//si no contiene esa temperatura y es nueva
                uniques.push(temperatures[index])
                comptadors.push(1)
            }

        }
        console.log("Las temperaturas repetidas son:")
        for (let index = 0; index < comptadors.length; index++) {
            if (comptadors[index] > 1) {
                console.log(uniques[index])
            }
        }
    })
})