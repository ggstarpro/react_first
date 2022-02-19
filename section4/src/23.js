/**
 * スプレット構文...
 */
const array1 = [1, 2];

// -> [1, 2]
console.log(array1);

// スプレット構文 -> 1 2
console.log(...array1);


const sumFunc = (num1, num2) => console.log(num1 + num2);

// 3
sumFunc(array1[0], array1[1]);

// 3
sumFunc(...array1);


// まとめる
const array2 = [1,2,3,4,5];
// const [num1, num2, num3, num4, num5] = array2;
const [num1, num2, ...array3] = array2;
// 1
console.log(num1);
// 2
console.log(num2);
// [3, 4, 5]
console.log(array3);

// 配列のコピー, 結合
const array4 = [10, 20];
const array5 = [30, 40];

const array6 = [...array4];
// [10,20]
console.log(array6);

const array7 = [...array4, ...array5];

// [10,20,30,40]
console.log(array7);

// !!!! 「=」でコピーした場合参照が引き継がれる
const array8 = array4;
console.log(array8);
array8[0] = 10000;

console.log(array8); // 両方とも変わる[10000,20]
console.log(array4); // 両方とも変わる[10000,20]

// !!!! 「スプレット構文コピー」
const array9 = [...array4];
array9[0] = 99;
console.log(array9); // [99, 20]
console.log(array4); // [10000, 20]