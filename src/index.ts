class User {


    constructor(public name:string,private age:number) {
        this.name = name;
        this.age = age;
    }

    public isAdult(): boolean {
        return this.age >= 20;
    }

}
