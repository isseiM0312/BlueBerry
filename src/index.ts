function map<T,U>(array: T[], callback: (i : T) =>  U) : U[] {
 const result : U[] = [];
 for (const elm of array) {
    result.push(callback(elm));
 }
 return result;
}

const data = [1,2,3,4,5,6,7,8,9]

const result = map(data,(x) => x * 10);

for (const elm of result) {
    console.log(elm);
}