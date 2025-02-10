import { TasksProvider } from './TasksContext.js';
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';
import './App.css';

export default function App() {
  return (
    <TasksProvider>
      <div className="app-container">
        <h1>ToDo List App</h1>
        <AddTask />
        <TaskList />
      </div>
    </TasksProvider>
  );
}
