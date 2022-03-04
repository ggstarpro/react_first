export const Practice3 = () => {

  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  }
  const onCLickPractice1 = () => {
    let total: number = 0;
    total = getTotalFee(100);

    console.log(total);
  }

  return (
    <div>
      <p>練習問題3:変数値の型指定</p>
      <button onClick={onCLickPractice1}>練習問題3を実行</button>
    </div>
  )
}