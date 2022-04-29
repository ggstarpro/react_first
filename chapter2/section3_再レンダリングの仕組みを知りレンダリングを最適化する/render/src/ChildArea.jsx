// 親コンポーネントが更新されてもpropsに変更がなければ再レンダリングされないようにする。
import {memo} from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};
/**
 * ・stateが更新されたコンポーネントは再レンダリング
 * ・propsが変更されたコンポーネントは再レンダリング
 * ・再レンダリングされたコンポーネント配下の子要素は再レンダリング
 */
export const ChildArea = memo((props) => {
  console.log('子がレンダリングされた');

  const {open, onClickClose} = props;
  // 擬似的にレンダリングコストを高める
  const data = [...Array(2000).keys()];
  data.forEach(() => {
    //console.log('a');
  })

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});