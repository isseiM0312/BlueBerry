type Human = {
    name : string;
    age? : number;
};

const uhyo : Human = {
    name : 'uhyo',
    age : 25
}

const john : Human = {
    name : 'john',
    age : undefined
}

type Human2 = {
    name : string;
    age : number | undefined;
};

const uhyo2 : Human2 = {
    name : 'jon',
    age : undefined //Human2だとこれがないとエラー
}

function userMabyeHuman(human : Human | undefined) {
    const age = human?.age;
    console.log(age);
}

userMabyeHuman(undefined)

type GetTimeFunc  = () => Date;

function useTime(getTimeFunc : GetTimeFunc | undefined) {
    const timeStringOrUndefined = getTimeFunc?.().toString();
}