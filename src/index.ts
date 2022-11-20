class User<T> {
    name:string;
    #age:number;
    readonly data: T;

    constructor(name: string, age:number, data:T) {
        this.name = name;
        this.#age = age;
        this.data = data;
    }

    public isAdult(): boolean {
        return this.#age >= 20;
    }

}

const join = new User<{num:number}>('John',15,{num:14})