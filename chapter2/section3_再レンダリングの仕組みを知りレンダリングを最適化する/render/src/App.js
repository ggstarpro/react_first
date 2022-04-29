/**
 * コンポーネントのmemo化と関数のメモ化は再レンダリングを最適化していく上で必須。
 * 変数自体のmemo化というのもある。
 */
import { useState, useCallback, useMemo} from 'react';
import './App.css';
import { ChildArea } from './ChildArea';

function App() {
  console.log('レンダリングApp');
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const onClickOpen = () => setOpen(!open);
  const onChangeText = (event) => setText(event.target.value);

  // 毎回新しい関数を生成しているという判断をくらっているのでuseCallbackを使う。
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  // 変数自体のmemo化
  const temp = useMemo(() => 1+3, []);
  console.log(temp);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText}/>
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose}/>
    </div>
  );
}

export default App;


