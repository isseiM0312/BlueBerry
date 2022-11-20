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

//大域脱出によってcatchがないと永遠と外へ逃げていき限界までいくとクラッシュする。
//これによってネストしてた処理をのエラーを一箇所で拾える。