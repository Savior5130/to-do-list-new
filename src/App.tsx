import React, { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import EditForm from './components/EditForm';
import TodoList from './components/TodoList';
import { ITodo } from './interface/interface';

const App = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const onFormSubmit = (props: any) => {
    const todo = {
      todoId: todos.length,
      todoTitle: props.todoTitle,
      todoDueDate: props.todoDueDate,
      todoDesc: props.todoDesc,
      todoStatus: 'todo',
    };
    setTodos([...todos, todo]);
  };

  const [mode, setMode] = useState('read');
  if (mode === 'read') {
    return (
      <div>
        <TodoForm title='Add' onFormSubmit={onFormSubmit} />
        <TodoList todos={todos} />
      </div>
    );
  } else {
    return (
      <div>
        <EditForm />
      </div>
    );
  }
};

export default App;
