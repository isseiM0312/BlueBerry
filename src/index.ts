type Human = {
    type : 'human';
    name : string;
    age : number;
}

type HumanKeys = keyof Human;

let key: HumanKeys = 'name';
key = 'age';
key = 'type';
//keyofの効果はオブジェクトのプロパティ名のリテラルのユニオン型をとるってやつ。
//keyはHumanのプロパティのリテラルのユニオン型、つまり 'type' | 'age' | 'name'
//型レベル計算の第一歩！

const mmConversionTable = {
    mm: 1,
    m: 1e3,
    km: 1e6,
    kkm : 1e9//こんなふうに変なやつ追加しても大丈夫。
    //ここの値に過不足のない型定義ができる！！
}

function convertUnits(value: number, unit: keyof typeof mmConversionTable) {
    const mmValue = value * mmConversionTable[unit]
    return {
        mm: mmValue,
        m : mmValue / 1e3,
        km : mmValue / 1e6
    }
}
//keyof typeof オブジェクト　でオブジェクトのプロパティ名をすべて許容するユニオン型を生成できる。