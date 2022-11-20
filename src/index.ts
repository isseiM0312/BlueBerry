try {
    console.log('エラーを発生させます！');
    throwError();
    console.log('ここも表示されない');
} finally  {
    console.log('finally');
}
console.log('tryから出ちゃってクラッシュ')

function throwError() {
    const error = new Error('エラー');
    throw error;
    console.log('こいつも表示されない')
}

//finallyはtryのみのブロック(これだと脱出される)の前に割り込める。なおreturnでもいける。