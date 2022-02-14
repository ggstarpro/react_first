/**
 * const,letなどの変数宣言
 */

// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ var ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
var val1 = 'var変数';
console.log(val1);

// var変数は上書き可能
var1 = 'var変数上書き';
console.log(var1);

// var変数は再宣言可能
var var1 = 'var変数を再宣言';
console.log(var1);
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ var ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑


// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ let ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// let var2 = 'let変数';
// console.log(var2);

// // letは上書きが可能
// var2 = 'let変数上書き';
// console.log(var2);

// // letは再宣言不可能]
// let var2 = 'let変数上書き';
// console.log(var2);
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ let ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ const ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// const var3 = 'const変数';
// console.log(var2);

// // letは上書きが不可
// var3 = 'const変数上書き';
// console.log(var3);

// // letは再宣言不可能]
// const var3 = 'const変数上書き';
// console.log(var3);


// objectは上書きできる
const val4 = {
  name: '榊原',
  age: 28
}
console.log(val4);

val4.name = '名前上側き'
console.log(val4);

// objectは新しいプロパティを追加できる
val4.address = 'Tokyo'
console.log(val4);
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ const ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑


// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 配列 ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
const val5 = ['dog', 'cat'];
val5[0] = 'bird'
val5.push('monky');
console.log(val5);
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ 配列 ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑