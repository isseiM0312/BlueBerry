type Human = { name : string }
type Animal = { species : string }
function getName(human : Human) {
    return human.name;
}

function getSpecies(animal : Animal) {
    return animal.species;
}

const mysteryFunc = Math.random() < 0.5 ? getName : getSpecies;

//このmysteryFuncを呼び出すときに渡す値は、Human & Animal型
//考えてみれば簡単で、nameもspeciesも持ってるオブジェクトを渡してあげればそれは部分型なのでどっちにも入れられる。