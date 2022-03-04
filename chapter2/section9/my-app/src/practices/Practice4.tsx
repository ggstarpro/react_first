export const Practice4 = () => {

  const calcTotalFee = (num) => {
    const total = num * 1.1;
    console.log(total);
  }
  const onCLickPractice1 = () => calcTotalFee(100);

  return (
    <div>
      <p>練習問題4:設定ファイル</p>
      <button onClick={onCLickPractice1}>練習問題4を実行</button>
      tscofnig.jsonの"strict": true,にするとnumに型を指定しないとエラーに「パラメーター 'num' の型は暗黙的に 'any' になります。」
      "noImplicitAny": false,にするとエラーが消える。
    </div>
  )
}