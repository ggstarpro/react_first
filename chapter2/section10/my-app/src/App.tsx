import axios from 'axios';
import { useState } from 'react';
import './App.css';
import { Todo } from './Todo';
import { TodoType } from './types/todo';
import { Text } from './Text';
import { UserProfile } from './UserProfile';
import { User } from './types/user';

// type TodoType = {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }

const user: User = {
  name: "名前ですよ",
  hobbies: ["映画", "音楽"]
};

function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios.get<Array<TodoType>>('https://jsonplaceholder.typicode.com/todos').then((res) => {
      setTodos(res.data);
    })
  }

  return (
    <div className="App">
      <Text color="red" fontSize="18px" />
      <UserProfile user={user} />
      <button onClick={onClickFetchData}>取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

export default App;
