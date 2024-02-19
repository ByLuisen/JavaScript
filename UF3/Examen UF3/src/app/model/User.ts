export class User {
  #name: string;
  #password: string;

  constructor(
    name: string='',
    password: string='',
  ) {
    this.#name = name;
    this.#password = password;
  }

  get name(): string {
    return this.#name;
  }
  get password(): string {
    return this.#password;
  }

  set name(name: string) {
    this.#name = name;
  }
  set password(password: string) {
    this.#password = password;
  }

  toObject(): any {
    return {
      name: this.#name,
      password: this.#password,
    };
  }
}
