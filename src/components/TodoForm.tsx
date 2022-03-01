import React, { ChangeEvent, useState } from 'react';

const TodoForm = ({
  title,
  onFormSubmit,
}: {
  title: any;
  onFormSubmit: any;
}) => {
  const [todoTitle, setTodoTitle] = useState<string>('');
  const [todoDueDate, setTodoDueDate] = useState<Date>();
  const [todoDesc, setTodoDesc] = useState<string>('');

  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'inputTitle') {
      setTodoTitle(e.target.value);
    } else if (e.target.name === 'inputDueDate') {
      setTodoDueDate(new Date(e.target.value));
    } else {
      setTodoDesc(e.target.value);
    }
  };

  const formSubmitHandler = () => {
    onFormSubmit({ todoTitle, todoDueDate, todoDesc });
  };

  return (
    <div>
      <div className='row'>
        <h3>Add Todo</h3>
        <button type='submit' onClick={formSubmitHandler}>
          Create Todo
        </button>
      </div>
      <div className='row'>
        <div className='inputField'>
          <label htmlFor='inputTitle'>Title</label>
          <input
            id='inputTitle'
            type='text'
            name='inputTitle'
            value={todoTitle}
            onChange={changeHandler}
          />
        </div>
        <div className='inputField'>
          <label htmlFor='inputDueDate'>Date</label>
          <input
            id='inputDueDate'
            type='date'
            name='inputDueDate'
            value={todoDueDate}
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className='inputField'>
        <label htmlFor='inputDesc'>Description</label>
        <input
          id='inputDesc'
          name='inputDesc'
          onChange={changeHandler}
          value={todoDesc}
        />
      </div>
    </div>
  );
};

export default TodoForm;
