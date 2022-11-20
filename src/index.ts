class User {
    name:string;
    #age:number;

    constructor(name:string,age:number) {
        this.name = name;
        this.#age = age;
    }

    public isAdult(): boolean {
        return this.#age > 20;
    }

}

class PremiumUser extends User {
    rank : number = 1;

    public override isAdult(): boolean {
        return true;
    }
}

//superは結局親のコンストラクタを呼ぶやつ。上ではnameとageを親のコンストラクタ呼び出して定義してる。