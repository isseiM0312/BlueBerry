//型の条件分岐
//ジェネリクスで主に使われる

type RestArgs<M> = M extends 'string' ? [string,string] : [number,number,number]

function func<M extends 'string' | 'number'>(mode: M, ...args: RestArgs<M>) {

}

//funcにMとしてstringかnumberのやつを入れると、stringがあるなら[string,string]型になるってこと。

func('string','uhyo','hyo');

//union distributionってのもある
//Mがユニオン型だとド・モアブルみたいになる
