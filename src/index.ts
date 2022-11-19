type FooBarObj = {
    foo : number,
    bar : string
};

const obj : FooBarObj = {
    foo:3,
    bar:'d'
}

type tt = string;
const t : tt = 'dd';

type aobj = {
    [key:string] : number
}

const data : aobj = {
    'da':14
}

type optobj = {
    a : string,
    b? : string
}

const ins : optobj = {
    a : 'd'
}

type freezed = {
    readonly foo : string
}

try {
    let freeze : freezed = {
        foo : 'dfa'
    }
} catch (e) {
    console.log(e)
}

const obj3 = {
    foo: 'apiとかから型のわからないデータが返ってきた時のことを考えろ',
    bar: 'anyは使いたくないし、最初の一回とかだったら撮ってきたデータの型に応じて変更不可なかたを定義したい時あるよね',
    hoge: 'そんな時typeofを使うんだ、typeみたいに明示的に型を決めてあげなくても、型のコピーができる、apiからのデータがある時numberでまたある時stringなら、実行するごとに',
    fuga: '型を変えて定義してくれてかつちゃんとコンパイルエラーも出すよ'
}