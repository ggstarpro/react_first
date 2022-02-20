import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick} = props;
  const style = {
    backgroundColor: '#c1ffff',
    width: '400px',
    height: '30px',
    padding: '8px',
    margin: '8px',
    borderRadius: '8px'
  };
  return (
    <>
      <div style={style}>
        <input type="text" placeholder="TODOを入力" value={todoText} onChange={ onChange  } />
        <button onClick={ onClick }>追加</button>
      </div>
    </>
  );
};