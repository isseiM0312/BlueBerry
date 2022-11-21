type SignType = 'plus' | 'minus';
function signNumber(type : SignType) {
    return type === 'plus' ? 1 : -1;
}

function numberWithSign(num: number, type : SignType | 'none') {
    if (type === 'none') {
        return 0;
        //ここではnone型
    } else {
        return num *signNumber(type);
        //ここではSignType型
    }
}

console.log(numberWithSign(5,'plus'))
console.log(numberWithSign(5,'minus'))
console.log(numberWithSign(5,'none'))

//コードで明示的にその型になるしかないように絞られてる(例えばIf文などで)ときは、その絞られた方で処理を続ける