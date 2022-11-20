type Animal = {
    species : string;
    age: string;
}

type Human = {
    name : string;
    age : number;
}

type User = Animal | Human

const tama : User = {
    species : 'cat',
    age : 'fuck'
}

const uhyo : User = {
    name : 'uhyo',
    age:26
}

function showAge(user: User) {
    const age = user.age; //ageの型はunionの伝播によりstring | numberになる
    console.log(age);
}