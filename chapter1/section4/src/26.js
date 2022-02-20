/**
 * 26. 論理演算子の本当の意味を知ろう && ||
 */
const flag1 = true;
const flag2 = false;

if (flag1 || flag2) {
  console.log('1か2はtrueになります。');
}

if (flag1 && flag2) {
  console.log('1も2もtrueになります');
}

//////////// 「||」 は左がfalseになる時右側を返すという意味 ///////////////////
const num = null;
// これの意味は？
const fee = num || '金額未設定です。'
console.log(fee); // 金額未設定です。

const num2 = 100;
// これの意味は？
const fee2 = num2 || '金額未設定です。'
console.log(fee2); // 100



//


//////////// 「&&」は左がtureなら右側を返す //////////////////////
const num3 = null;
const fee3 = num3 && '何か設定されました。' // null
console.log(fee3);

const num4 = 100;
const fee4 = num4 && '何か設定されました。'
console.log(fee4); // 何か設定されました。


const num5 = 100;
const fee5 =  '何か設定されました。' && num5
console.log(fee5); // 100