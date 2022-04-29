/**
 * 分割代入
 */
const myProfile = {
  name: '前田',
  age: 28
};

const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
console.log(message1);

// 分割代入
const { name, age } = myProfile;
const message2 = `名前は${name}です。年齢は${age}です。`;
console.log(message2);


// 配列も使える
const myProfile2 = ['前田', 10];
const message3 = `名前は${myProfile2[0]}です。年齢は${myProfile2[1]}です`;
console.log(message3);

// 分割代入(配列は名前が決まっていないので順番で受け取る)
const [nameTest, ageTest] = myProfile2;
const message4 = `名前は${nameTest}です。年齢は${ageTest}です`;
console.log(message4);