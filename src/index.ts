class User {
    constructor(public name : string,public age : number) {

    }

    getMessage(message : string) {
        return(`${this.name} (${this.age}) ${message}`);
    }
}

const uhyo = new User('uhyo',26);
console.log(uhyo.getMessage('ハロー'))