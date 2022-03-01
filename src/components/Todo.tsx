import React from 'react';
import { ITodo } from '../interface/interface';

const Todo = ({ todo }: { todo: ITodo }) => {
  return (
    <div>
      <h4>{todo.todoTitle}</h4>
      <sub>{todo.todoDueDate}</sub>
      <p>{todo.todoDesc}</p>
    </div>
  );
};

export default Todo;
