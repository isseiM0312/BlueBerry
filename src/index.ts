function isStringOnNumber(value: unknown) : value is string | number {
    return typeof value === 'string' || typeof value === 'number';
}

//引数名 is 型　ってのを型制限に書いて、返り値がtrueならisの後ろに書いてある型を返す。

//assertはvoidで、例外検知で型を判定する時に使える