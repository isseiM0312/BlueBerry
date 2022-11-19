type T = {
    foo : string;
    bar : number
}

const obj : T = {
    foo : 'hello',
    bar : 123
}

const {foo, bar:barVar} = obj;

const nested = {
    num : 123,
    obj : {
        foo : 'hello',
        bar : 'world'
    }
}
