import { useState } from 'react';
import { useTasksDispatch } from './TasksContext.js';

let nextId = 4;

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();

  const handleAdd = () => {
    if (!text.trim()) return;
    dispatch({
      type: 'added',
      id: nextId++,
      text: text.trim()
    });
    setText(''); // Clear the input
  };

  return (
    <div className="input-container">
      <input
        className="task-input"
        placeholder="Enter task description"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button className="add-button" onClick={handleAdd}>
        Add Task
      </button>
    </div>
  );
}
