import React from "react";
import { useState } from "react";
import "./styles.css"
import {InputTodo} from "./componets/InputTodo";
import {IncompleteTodo} from "./componets/IncompleteTodo";

export const App = () => {
  const [todoText, setTotoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTotoText(event.target.value);
  const onClickAdd = () => {
    if(todoText === '') return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTotoText('');
  }
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  }
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }
  const onClickBack = (index) => {
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={ onChangeTodoText }
        onClick={ onClickAdd }
      />
      <IncompleteTodo
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          { completeTodos.map((todo, index) => {
            return (
              <div key={index} className="list-row">
                <li>{ todo }</li>
                <button onClick={ () => onClickBack(index) }>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}