/**
 * テンプレート文字列
 */
const name = 'たなか';
const age = 28;

// 「私の名前はたなかです。年齢は28歳です」
// 従来
const message1 = "私の名前は" + name + "です。" + "年齢は" + age + "です。";
console.log(message1);
// テンプレート文字列
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);


