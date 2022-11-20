try {
    throwError();
    console.log('ここも表示されない');
} catch (err) {
    console.log(err);
}

function throwError() {
    const error = new Error('エラー');
    throw error;
    console.log('こいつも表示されない')
}

//帯域脱出によってtryがないと永遠と外へ逃げていき限界までいくとクラッシュする。
//これによってネストしてた処理をのエラーを一箇所で拾える。