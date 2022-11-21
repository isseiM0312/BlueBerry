type uhyo = 'uhyo';

const uhyo1 = 'uhyo';

let uhyo2 = 'uhyo';
//let uhyo2: string 再代入が期待されるため、stringに拡張される、これをwindingという

const uhyo3 = {
    name : 'uhyo', //(property) name: string オブジェクト型はconstでも中身変えられるのでwindingが起こる
    age : 26
}