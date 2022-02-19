/**
 * アロー関数
 */
// 従来の関数
function func1(str) {
  return str;
};

// また変数の中に入れることも可能
const func2 = function(str) {
  return str;
};
// アロー関数
const func3 = (str) => {
  return str;
};
// アロー関数省略
const func4 = str => {
  return str;
};
// アロー関数省略
const func5 = str => str;

// 使用例
const func6 = (num1, num2) => {
  return num1 + num2;
}

const func7 = (val1, val2) => (
  {
    name: val1,
    age: val2
  }
)
console.log(func1('func1です。'));
console.log(func2('func2です。'));
console.log(func3('func3です。'));
console.log(func4('func4です。'));
console.log(func5('func5です。'));
console.log(func6(10, 3));
console.log(func7('テスト太郎', '20'));