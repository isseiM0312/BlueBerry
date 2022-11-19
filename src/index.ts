type User = {
    name : string,
    age : number,
    premiumUser : boolean
}

const data: string = `
uhyo,26,1
John Smith,27,0
Mary Sue,14,1
`;

const users : User[] = []

const lines = data.split('\n');

for (const line of lines) {
    if (line === '') {
        continue;
    }
    const [name,ageString,premiumUserString] = line.split(',');
    const age = Number(ageString);
    const premiumUser = premiumUserString === '1'

    users.push({
        name,
        age,
        premiumUser
    });
}

for (const user of users) {
    console.log(`${user.name} (${user.age})はプレミアムユーザー${user.premiumUser ? 'です。' : 'ではありません。'}`)
}