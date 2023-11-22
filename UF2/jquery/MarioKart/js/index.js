// Este código se ejecuta una vez que el documento HTML ha sido completamente cargado y está listo para ser manipulado.
$(document).ready(function () {

    // Hace que los elementos con la clase "personajes" sean arrastrables y se reviertan a su posición original si no se sueltan en un destino válido.
    $(".personajes").draggable({
        revert: "invalid"
    });

    // Hace que los elementos con la clase "objetos" sean arrastrables y se reviertan a su posición original si no se sueltan en un destino válido.
    $(".objetos").draggable({
        revert: "invalid"
    });

    // Hace que el contenedor con el ID "personajes" acepte elementos arrastrables con la clase "personajes".
    $("#personajes").droppable({
        // Solo acepta elementos con la clase "personajes".
        accept: ".personajes",

        // Clases CSS que se aplican cuando un elemento es arrastrado sobre el contenedor o cuando está siendo soltado en el contenedor.
        classes: {
            "ui-droppable-active": "ui-state-active",
            "ui-droppable-hover": "ui-state-hover"
        },

        // Esta función se ejecuta cuando un elemento es soltado en el contenedor.
        drop: function (event, ui) {
            // Clona el elemento que está siendo arrastrado.
            var droppedElement = ui.helper.clone();

            // Restablece las propiedades de posición para evitar problemas de posición al soltar.
            droppedElement.css({
                position: "",
                left: "",
                top: ""
            });

            // Agrega el clon al contenedor actual.
            $(this).append(droppedElement);

            // Elimina el elemento original que estaba siendo arrastrado para evitar duplicados.
            ui.helper.remove();
        }
    });

    // Hace que el contenedor con el ID "objetos" acepte elementos arrastrables con la clase "objetos".
    $("#objetos").droppable({
        // Solo acepta elementos con la clase "objetos".
        accept: ".objetos",

        // Clases CSS que se aplican cuando un elemento es arrastrado sobre el contenedor o cuando está siendo soltado en el contenedor.
        classes: {
            "ui-droppable-active": "ui-d-active",
            "ui-droppable-hover": "ui-state-hover"
        },

        // Esta función se ejecuta cuando un elemento es soltado en el contenedor.
        drop: function (event, ui) {
            // Clona el elemento que está siendo arrastrado.
            var droppedElement = ui.helper.clone();

            // Restablece las propiedades de posición para evitar problemas de posición al soltar.
            droppedElement.css({
                position: "",
                left: "",
                top: "",
            });

            // Agrega el clon al contenedor actual.
            $(this).append(droppedElement);

            // Elimina el elemento original que estaba siendo arrastrado para evitar duplicados.
            ui.helper.remove();
        }
    });
});
