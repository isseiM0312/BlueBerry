class User {
    name:string = '';
    age:number = 0;
}

type MyUserConstructor = new () => User;

const Myuser : MyUserConstructor = User;

//class型はnewぶち込むとインスタンスを作成するっていう関数型

const u = new Myuser();

console.log(u.name,u.age)