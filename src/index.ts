//as はTSでは基本的に使うべきじゃない！
//typeof は typeof 変数　=== 型　じゃないと型の絞り込みを自動で行なってくれない。
//上以外のタイミングで人間には明らかに型決まってるやん！て時に
//TSの型予測システムを覆して処理書く時に使う

type Animal  = {
    tag : 'animal',
    species : 'string' 
}

type Human = {
    tag : 'human',
    name : string
}

type User = Animal | Human;

function getNamesIfAllHuman(users:readonly User[]): string[] | undefined {
    if (users.every(user => user.tag === 'human')) {
        return (users as Human[]).map(user => user.name);
    }
    return undefined;
}