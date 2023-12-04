class Animal {
    #especie
    #sexe
    #naixement
    #pais
    #continent

    constructor(especie, sexe, naixement, pais, continent) {
        this.#especie = especie
        this.#sexe = sexe
        this.#naixement = naixement
        this.#pais = pais
        this.#continent = continent
    }

    get especie() {
        return this.#especie
    }
    get sexe() {
        return this.#sexe
    }
    get naixement() {
        return this.#naixement
    }
    get pais() {
        return this.#pais
    }
    get continent() {
        return this.#continent
    }

    set especie(especie) {
        return this.#especie = especie
    }
    set sexe(sexe) {
        return this.#sexe = sexe
    }
    set naixement(naixement) {
        return this.#naixement = naixement
    }
    set pais(pais) {
        return this.#pais = pais
    }
    set continent(continent) {
        return this.#continent = continent
    }

    printing() {
        return `Especie: ${this.#especie}, sexe: ${this.#sexe}, naixement: ${this.#naixement}, 
                pais: ${this.#pais}, continent: ${this.#continent}`
    }

    toObject() {
        return {
            especie: this.#especie,
            sexe: this.#sexe,
            naixement: this.#naixement,
            pais: this.#pais,
            continent: this.#continent
        }
    }
}