function getFizzBuzzString(i : number) : string {
    let result = '';
    if (i % 3 === 0 && i % 5 === 0) {
        result = 'FizzBuzz';
    } else if (i % 3 === 0) {
        result = 'Fizz';
    } else if (i % 5 === 0) {
        result = 'Buzz';
    } else {
        result = `${i}`
    }
    return result;
}

for (let i = 1; i <= 100; i++) {
    const message = getFizzBuzzString(i);
    console.log(message);
}