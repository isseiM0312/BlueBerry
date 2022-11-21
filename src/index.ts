
const hoge : FooString = 'foo'
//const hoge : FooString = 'foos > これだとエラー'

type FooString = 'foo';

type one = 1;

type t = true;

type three = 3n;

//リテラル型は4種類ある

function getHelloStr() : `Hello ${string}!` {
    const rand = Math.random();
    if (rand < 0.3) {
        return 'Hello World!';
    } else {
        return 'Hello World!'
        //return 'Hello Worldq'
    }
}

function signNumber(type  : 'plus' | 'minus') {
    return type === 'plus' ? 1 : -1;
}

console.log(signNumber('plus'));
console.log(signNumber('minus'));