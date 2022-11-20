type HasName = {
    name : string;
}

class User implements HasName {
    name:string;
    protected age:number;

    constructor(name:string,age:number) {
        this.name = name;
        this.age = age;
    }

    public isAdult(): boolean {
        return this.age > 20;
    }

}

class PremiumUser extends User {

    public isAdult(): boolean {
        return this.age >= 10;
    }
}
