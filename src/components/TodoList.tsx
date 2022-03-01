import React from 'react';
import { ITodo } from '../interface/interface';
import Todo from './Todo';

const TodoList = ({ todos }: { todos: ITodo[] }) => {
  const renderedList = todos.map((todo) => {
    console.log(todo);
    return <Todo key={todo.todoId} todo={todo} />;
  });
  return <div>{renderedList}</div>;
};

export default TodoList;
