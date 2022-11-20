class User {
    static adminName: string = 'uhyo';
    static getAdminUser() {
        return new User(User.adminName,26);
    }

    name : string;
    age : number;

    constructor(name:string,age:number) {
        this.name = name;
        this.age = age;
    }

    isAdult(): boolean {
        return this.age >= 20;
    }
}

console.log(User.adminName);