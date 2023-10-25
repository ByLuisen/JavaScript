export class Viaje {
    #origen
    #destino
    #fechaIda
    #fechaVuelta
    #pasajeros

    constructor(origen, destino, fechaIda, fechaVuelta, pasajeros){
        this.#origen = origen
        this.#destino = destino
        this.#fechaIda = fechaIda
        this.#fechaVuelta = fechaVuelta
        this.#pasajeros = pasajeros
    }

    get origen() {
        return this.#origen
    }
    get destino() {
        return this.#destino
    }
    get fechaIda() {
        return this.#fechaIda
    }
    get fechaVuelta() {
        return this.#fechaVuelta
    }
    get pasajeros() {
        return this.#pasajeros
    }
    
    printing() {
        return `Origen: ${this.#origen}, Destino: ${this.#destino}, Fecha ida: ${this.#fechaIda}, 
                Fecha vuelta: ${this.#fechaVuelta}, Pasajeros: ${this.#pasajeros}` 
    }
}