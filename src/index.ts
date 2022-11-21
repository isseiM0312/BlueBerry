type Human = {
    type : 'human';
    name : string;
    age : number;
}

//T<S>みたいに型を渡せるのがlookup型

function setAge(human: Human, age : Human['age']) {
    return(
        {
            ...human,
            age
        }
    )
}

const uhyo: Human = {
    type:'human',
    name:'uhyo',
    age:26
}

const uhyo2 = setAge(uhyo,27)

//lookup型で型を再利用できる！