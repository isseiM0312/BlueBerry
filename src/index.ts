class User {
    name:string = "";
    age:number = 0;

    isAdult() : boolean {
        return this.age > 20;
    }

}

const uhyo: User = new User();

const john : User = {
    name:'J',
    age:0,
    isAdult: () => true,
}

const john2  = {
    name:'J',
    age:0,
    isAdult: () => true,
    x : undefined
}

const john3 = john2