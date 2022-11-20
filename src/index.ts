type Animal = {
    species : string;
    age: number;
}

type Human = Animal & {
    name : string;
}

type User = Animal | Human

const tama : User = {
    species : 'cat',
    age : 6
}

const uhyo : User = {
    species : '',
    name : 'uhyo',
    age:26,
}

function showAge(user: User) {
    const age = user.age; 
    console.log(age);
}

//インターセクション型で作った方は大体部分型になる（より厳しく情報を求められるから)

type crazy = number & string
//異なるプリミティブ同士でやるとnevernになる。

type lesscrazy = Animal & string
//オブジェクトとプリミティブは、プリミティブがオブジェクトっぽい動き(例えばstring.lengh)とかするかもなので即neverではない。