type Family<Parent,Child> = {
    mother:Parent,
    father:Parent,
    child:Child
}

//型を引数みたいにできる、高度な抽象化の際に使われる

const obj : Family<number,string> = {
    mother : 1,
    father : 2,
    child : ''
}

type HasName = {
    name: string;
};

type AltFamily<Parent extends HasName, Child extends HasName> = {
    mother: Parent,
    father:Parent,
    child:Child
}

type Animal = {
    name: string;
}

type Human = {
    name : string;
    age: number;
}

type T = AltFamily<Animal,Human>

