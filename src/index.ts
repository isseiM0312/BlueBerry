type Animal = {
    name:string
}

type Human = {
    name:string,
    age :number
}

type Family<Parent = Animal,Child = Animal> = {
    mother:Parent,
    father:Parent,
    child:Child
}

type S = Family<string,Human>
type T = Family
type U = Family<Human>
//今んとこ右側だけを指定するとかはできない

type t = number[]

const arr2 : Array<number> = [1]

const arr3 : t = arr2

const arr : readonly number[] = [1,20]

for (const ar of arr) {
    console.log(ar);
}

let tuple : [string,number] = ['d',0]