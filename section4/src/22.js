/**
 * デフォルト値
 */
const sayHello = (name) => console.log(`こんにちは!${name}さん!`);

// 出力->こんにちは!前田さん!
sayHello("前田");

// 出力->こんにちは!undefinedさん!
sayHello();


const sayHello2 = (name = 'ゲスト') => console.log(`こんにちは!${name}さん!`);
sayHello2();