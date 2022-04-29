import { TodoType } from './types/todo';
import { VFC } from 'react';
// type todoType = {
//   userId: number;
//   title: string;
//   completed?: boolean;
// }

// Omit<TodoType, "id">
export const Todo: VFC<Pick<TodoType, "userId" | "title" | "completed">> = (props) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "未";
  return <p>{`${completeMark} ${title}(ユーザ:${userId})`}</p>;
}