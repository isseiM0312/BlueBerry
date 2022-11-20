function range(max:number,min:number) : number[] {
    const result : number[] = []
    for (let i = min; i <= max; i++) {
        result.push(i)
    }
    return result;
}

console.log(range(7,3))

type Human = {
    height:number;
    weight:number;
}

const calcBMI = function({height,weight} : Human) : number {
    return weight / height **2;
};

console.log(calcBMI({height:180,weight:70}))

const calcBMI2 = ({height,weight} : Human ) : number => {
    return weight / height **2;
}

const calcBMI3 = ({weight,height} : Human) : number => weight / height **2;

//オブジェクトを返すときは =>{}とかくと省略形でない普通のアロー関数に見えちゃうので=>({})とする。

const clacBMIojb = ({weight,height} : Human) : {} => ({weight,height})
console.log(clacBMIojb({height:180,weight:70}))

//オブジェクトリテラルの中に関数入れるやり方

const obj = {
    double : (num : number) : number => num * 2,
    double2(num :number) :number { return num * 2 }

}

console.log(obj.double(1));
console.log(obj.double2(2));

//残った引数全部掻っ攫う可変長引数

const sum = (base : number = 10, ...args : number[]) : number => {
    let result : number = 0;
    for (const arg of args) {
        result += arg;
    }
    return result * base;
}

console.log(sum(1,2,3))
console.log(sum(1,3,3,5,6,3,5))

const wantsum : number[] = [1,2,3,4,5,6,7,8,9];
console.log(sum(10,...wantsum))

type functiontype = (s : string) => number;
//これは関数自体の型で、mapとかのコールバックとして渡す時の型判定とかに！

type MyFunc = {
    isUsed?: boolean
    (arg : number) : void
}

const double : MyFunc = (arg : number) => {
    console.log(arg * 2);
}

