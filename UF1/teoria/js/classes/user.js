export class User {//export = serveix per ver visible la classe desde fora
    //atributs, propietats: PRIVATS
    #username;//# vol dir que l'atribut username és privat
    #password;//# vol dir que l'atribut password és privat
    //email; //aquest atribut és public. MILLOR QUE NO SIGUI PUBLIC!!!

    //constructor: donar valors al atributs a la vegada
    constructor(username, password) {
        this.#username = username;
        this.#password = password;
    }

    /*     getters, setters: SEMPRE PÚBLICS. Serveixen per
         recollir un valor d'un atribut o donar el valor */
    get username() {
        return this.#username;
    }
    get password() {
        return this.#password
    }
    set username(username) {
        this.#username = username;
    }
    set password(password) {
        this.#password = password;
    }

    //mètodes: accions de l'usuari. Poden ser públics o privats
    printing() {
        // return "El teu nom és " + this.#username + ", " + this.#password;
        return `El teun nom és ${this.#username} ${this.#password}`
    }
}