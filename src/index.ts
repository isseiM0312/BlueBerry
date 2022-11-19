const obj : {
    foo:number,
    bar:string
} = {
    foo:123,
    bar:'Hello World'
}

const obj2 = {
    'oom' : 'dad',
    'ds fdsav':12,
    1:233
}

console.log(obj2.oom);
console.log(obj2["ds fdsav"])
console.log(obj2[1])