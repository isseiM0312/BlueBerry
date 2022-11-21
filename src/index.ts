//as const は味方！

const name1 = ['uhyo','John','Taro'];
//const name1: string[]

const name2 = ['uhyo','John','Taro'] as const;
//const name2: readonly ["uhyo", "John", "Taro"]

//データから型きめる形！
type Names = (typeof name2)[number];