/* eslint react-hooks/exhaustive-deps: off */
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ColorfullMessage from './componets/ColorfullMessage';
import { ColorfullMessage2 } from './componets/ColorfullMessage2'; // defaultよりこっちの方が良い。

const App = () => {
  console.log('レンダリング');
  // 動的に変わる変数(ステートの変数名), ステートを更新する関数
  const [num, setNum] = useState(0); // 0は初期値として設定した。

  const [facdeShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
    // setNum((prev) => prev +1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(! facdeShowFlag);
  };

  // 関心の分離
  useEffect(() => {
    console.log('useEffect');
    if (num === 0) {

    } else if (num % 3 === 0) {
      facdeShowFlag || setFaceShowFlag(true);
    } else {
      facdeShowFlag && setFaceShowFlag(false);
    }

  }, [num]); //eslintの設定変えといた方がいい。

  return (
    <>
      <h1 style={{color: 'red' }}>こんにちは</h1>
      <ColorfullMessage color="blue">
        お元気ですか？
      </ColorfullMessage>

      <ColorfullMessage color="pink">
        元気です1！
      </ColorfullMessage>
      <ColorfullMessage2 color="yellow">
        元気です！
      </ColorfullMessage2>

      <p>{ num } </p>
      <button onClick={onClickCountUp}>カウントアップ!</button><br />
      <button onClick={onClickSwitchShowFlag}>on/Off</button>

      { facdeShowFlag &&  <p>^-^</p> }
    </>
  );
}

export default App;