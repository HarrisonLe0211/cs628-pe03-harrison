import { useTasks } from './TasksContext.js';
import { useTasksDispatch } from './TasksContext.js';

export default function TaskList() {
  const tasks = useTasks();
  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}

function TaskItem({ task }) {
  const dispatch = useTasksDispatch();

  const handleDelete = () => {
    dispatch({
      type: 'deleted',
      id: task.id
    });
  };

  return (
    <div className="task-item">
      <span>{task.text}</span>
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
