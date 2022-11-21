type HasToString = {
    toString: () => string;
}
//HasToStringの型制限は、toStringっていうstring型を返すメソッドを持ってるオブジェクトってだけで、
//実はnumberとかのprimitive型もtoString持ってる

function useToString1(value: HasToString) {
    console.log(`value is ${value.toString()}`)
}

useToString1({
    toString() {
        return 'fsg'
    }
})

useToString1(2)