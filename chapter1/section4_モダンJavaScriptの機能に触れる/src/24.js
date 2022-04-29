/**
 * mapやfilter
 */
const nameArr = ["田中", "山田", '飛鳥'];

// 従来
// for(let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr);
// }

// map
const nameArr2 = nameArr.map((name) => {
  return name;
});

// ["田中","山田","飛鳥"]
console.log(nameArr2);


// 田中
// 山田
// 飛鳥
nameArr.map((name) => console.log(name));



// filter(ある条件に一致したものだけを取り出し新しい配列を作成)
const numArr = [1,2,3,4,5];
const newNumArr = numArr.filter(num=>{
  return num % 2 === 1;
});
// [1,3,5]
console.log(newNumArr);


// 何番目の要素なのか？
for (let index = 0; index < nameArr.length; index++) {
  console.log(`${index + 1}番目は${nameArr[index]}です。`);
}

// mapでは？
nameArr.map((name, index)=>console.log(`${index + 1}番目は${name}です`))



// 飛鳥さんづけ
const newNameArray = nameArr.map((name)=>{
  if(name === '飛鳥') {
    return `${name}さん`
  }
  return name;
});

console.log(newNameArray);