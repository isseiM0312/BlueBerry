function createUser(name:string,age:number) {
    return (message : string) : string => {
        return `${name} (${age}) ${message}`
    }
}

const getMessage = createUser('uhyo', 24);
console.log(getMessage('うい'));