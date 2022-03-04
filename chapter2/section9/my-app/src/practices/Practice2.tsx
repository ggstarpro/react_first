export const Practice2 = () => {

  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  }
  const onCLickPractice1 = () => {
    console.log(getTotalFee(100));
  }

  return (
    <div>
      <p>練習問題2:返却値の型指定</p>
      <button onClick={onCLickPractice1}>練習問題2を実行</button>
    </div>
  )
}