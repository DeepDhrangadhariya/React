import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../redux/actions';

const TodoList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleDelete = id => {
    dispatch(deleteTask(id));
  };

  const handleEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const handleSave = id => {
    const editedTask = {
      id: id,
      text: editText
    };
    dispatch(editTask(editedTask));
    setEditId(null);
    setEditText('');
  };

  return (
    <div>
      {tasks.map(task => (
        <div key={task.id} className="task-container">
          <h1>{task.text}</h1>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
          <button className="edit-button" onClick={() => handleEdit(task.id, task.text)}>Edit</button>
          {editId === task.id && (
            <div>
              <input
                type="text"
                value={editText}
                onChange={e => setEditText(e.target.value)}
                className="edit-input"
              />
              <button onClick={() => handleSave(task.id)}>Save</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
