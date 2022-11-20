//　obj.methodの時 this.somethingを中で読んでたらthisはobjを指す、
//　上の形じゃないとthisはundefinedになる
// 例えばobj.methodを関数として代入して代入した関数を呼び出すとthis効いてないからエラーになる

class User {
    name : string;
    #age: number;

    constructor(name:string,age:number) {
        this.name = name;
        this.#age = age;
    }

    public isAdult(): boolean {
        return this.#age >= 20;
    }

    public filterOlder(users:readonly User[]): User[] {
        return users.filter(u => u.#age > this.#age)
    }
}

const uhyo = new User('uhyo',25);
const john = new User('Jhon',15);
const bob = new User('Bob',40);

const older = uhyo.filterOlder([john,bob])

//ただしアロー関数のthisはどう呼び出したかは関係ない