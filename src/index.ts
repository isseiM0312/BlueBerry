type Fruit = 'apple' | 'orange' | 'strawberry';

type FruitArrays = {
    [P in Fruit]: P[]
}

const numbers: FruitArrays = {
    apple:['apple'],
    orange:['orange','orange'],
    strawberry:[]
}

