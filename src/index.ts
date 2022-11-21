function get<T, K extends keyof T>(obj : T, key : K) : T[K] {
    return obj[key];
}

//これとんでもない。
//Tにオブジェクトをわたすと、KにTに入れたオブジェクトのプロパティしか入れられなくなる。

type Human = {
    name: string
    age: number
}

type Animal = {
    species: string;
    age: number
}

const uhyo: Human = {
    name: 'uhyo',
    age: 26
}

const cat: Animal = {
    species: 'cat',
    age: 4
}

const uhyoName = get(uhyo,'name')
//function get<Human, "name">(obj: Human, key: "name"): string
const catSpecies = get(cat,'species')
//function get<Animal, "species">(obj: Animal, key: "species"): string

//keyofの強いとこ！　extends keyof K をとるとTに実際に値がが入ってくるまでTの型はわからなくても
//T[K]っていうlookupの形が取れる！