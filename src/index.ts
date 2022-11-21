type Animal = {
    tag:'animal';
    species: string;
}

type Human = {
    tag:'human';
    name: string;
}

type User = Animal | Human;


/* const alien : User = {
    tag : 'alien',
    name : 'www'
} */

//これはコンパイルエラー

function getUserName(user : User) {
    if (user.tag === 'human') {
        return user.name
    } else {
        return '名無し'
    } 
}

const tama : User = {
    tag : 'animal',
    species : 'dog'
}

const uhyo : User = {
    tag : 'human',
    name : 'uhyo'
}


console.log(getUserName(tama));
console.log(getUserName(uhyo));

//このようにすることで、扱われうるすべてのデータを含める型を定義できて、
//扱う側はtagで絞り込みを行って型確定させてから使える

//これが擬似的代数的データ型の威力だ！