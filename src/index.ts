type FooBar = {
    foo:string;
    bar:number;
}

type FooBarBaz = {
    foo:string;
    bar:number;
    baz:boolean;
}

const obj : FooBarBaz = {
    foo : 'hi',
    bar : 4,
    baz : true
}

const obj2 : FooBar = obj;

/* const obj2 : FooBar = {
    foo : 'hi',
    bar : 4,
    baz : true
};これだとエラー出るが、型安全性に関するものではない
 */