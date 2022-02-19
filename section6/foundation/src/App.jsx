import React from 'react';
import { useState } from 'react';
import ColorfullMessage from './componets/ColorfullMessage';


const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  // 動的に変わる変数(ステートの変数名), ステートを更新する関数
  const [num, setNum] = useState(0); // 0は初期値として設定した。

  return (
    <>
      <h1 style={{color: 'red' }}>こんにちは</h1>
      <ColorfullMessage color="blue">
        お元気ですか？
      </ColorfullMessage>

      <ColorfullMessage color="pink">
        元気です！
      </ColorfullMessage>
      <p>{ num } </p>
      <button onClick={onClickCountUp}>カウントアップ!</button>
    </>
  );
}

export default App;