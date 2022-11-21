type HasToString = {
    toString: () => string;
}
//HasToStringの型制限は、toStringっていうstring型を返すメソッドを持ってるオブジェクトってだけで、
//実はnumberとかのprimitive型もtoString持ってる

function useToString1(value: HasToString & object) {
    console.log(`value is ${value.toString()}`)
}

useToString1({
    toString() {
        return 'fsg'
    }
})

//useToString1(2)
//&objectつけるとエラー出る

//never型は空集合みたいなやつ
//何にでも代入できるか、値がないのでnever型のやつには何も代入できない
function userNever(value: never) {
    const num = value;
}

//userNever({})

//neverは全ての型の部分型である！(最も条件が厳しいからね！)
