type Animal = {
    species : string
}

type Human = {
    name : string
}

type User = Animal | Human

const tama : User = {
    species : 'cat'
}

const uhyo : User = {
    name : 'uhyo'
}