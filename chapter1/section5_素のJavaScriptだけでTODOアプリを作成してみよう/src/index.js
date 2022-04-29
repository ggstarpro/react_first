// import "./index.css"

const onClickAdd = ()=> {
  // テキストボックス の値取得
  const inputText = document.getElementById('add-text').value;
  // テキストボックス初期化
  document.getElementById('add-text').value = '';

  // div生成
  const div = document.createElement('div');
  div.className = 'list-row';

  // li生成
  const li = document.createElement('li');
  li.innerText = inputText;

  // button(完了)
  const completeButton = document.createElement('button');
  completeButton.innerText='完了';
  completeButton.addEventListener('click', () => {
    deleteFromIncompleteList(completeButton.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;

    // li
    const li = document.createElement('li');
    li.innerText = text;

    // 戻す
    const backButton = document.createElement('button');
    backButton.innerText = '戻す';
    backButton.addEventListener('click', () => {
      // 押された戻すボタンの親タグを管理ようリストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById('complete-list').removeChild(deleteTarget);

      const text = deleteTarget.firstChild.innerText;
      deleteTarget.textContent=null;

      // li
      const li = document.createElement('li');
      li.innerText = text;
      const completeButton = document.createElement('button');
      completeButton.innerText = '完了';

      const deleteButton = document.createElement('button');
      deleteButton.innerText = '削除';
      deleteTarget.appendChild(completeButton);
      deleteTarget.appendChild(deleteButton);
      document.getElementById('imcomplete-list').appendChild(deleteTarget);
    });
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    // 完了リストに追加
    document.getElementById('complete-list').appendChild(addTarget);
  });

  // button(削除)
  const deleteButton = document.createElement('button');
  deleteButton.innerText='削除';
  deleteButton.addEventListener('click', () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById('imcomplete-list').appendChild(div);
}



// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById('imcomplete-list').removeChild(target);
}

// 追加ボタンが押された時
document.getElementById('add-button').addEventListener('click', () => {
  onClickAdd();
});

