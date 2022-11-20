const User = class {
    name : string;
    age: number;

    constructor(name:string,age:number) {
        this.name = name;
        this.age = age;
    }

    public isAdult(): boolean {
        return this.age >= 20;
    }
};

