import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const AddTodo = () => {
  const [inValue, setInValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const newTask = {
      id: new Date().getTime(),
      text: inValue
    };
    dispatch(addTask(newTask));
    setInValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="input">Enter Task</label>
      <input
        type="text"
        id="input"
        value={inValue}
        onChange={e => setInValue(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTodo;
