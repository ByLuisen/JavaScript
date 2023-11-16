class User {
    #nom
    #cognom
    #email
    #password
    #dni

    constructor(email, password, nom, cognom, dni) {
        this.#email = email
        this.#password = password
        this.#nom = nom
        this.#cognom = cognom
        this.#dni = dni
    }

    get email() {
        return this.#email
    }
    get password() {
        return this.#password
    }
    get nom() {
        return this.#nom
    }
    get cognom() {
        return this.#cognom
    }
    get dni() {
        return this.#dni
    }

    set email(email) {
        return this.#email = email
    }
    set password(password) {
        return this.#password = password
    }
    set nom(nom) {
        return this.#nom = nom
    }
    set cognom(cognom) {
        return this.#cognom = cognom
    }
    set dni(dni) {
        return this.#dni = dni
    }

    printing() {
        return `Nom: ${this.#nom}, cognom: ${this.#cognom}, email: ${this.#email}, 
                password: ${this.#password}, dni: ${this.#dni}`
    }

    toLoginObject() {
        return {
            email: this.#email,
            password: this.#password
        }
    }

    toRegisterObject() {
        return {
            nom: this.#nom,
            cognom: this.#cognom,
            email: this.#email,
            password: this.#password,
            dni: this.#dni
        }
    }
}