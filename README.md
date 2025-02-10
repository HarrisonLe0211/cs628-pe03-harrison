# Input
There are a few input types that the user can make:
1. Entering a Task Name in the text box and add a new Task with the provided name.
2. Deleting the existing Tasks

# Process
The app is repurposed from the example provided in HOS04 and HOS05. 
- When the user opens the app, the app starts with some initial tasks (from initialTasks in TasksContext.js)
- When the user clicks the “Add” button, AddTask calls dispatch from useTasksDispatch(). 
- With the tasksReducer, case 'added' returns a new array containing all existing tasks plus the newly added one
- Each Task component has a “Delete” button that, when clicked, calls the dispatch which triggers the reducer to filter out the task that matches action.id
- TaskList re‐renders to show the new task at the end of the process

# Output
A webpage that display a list of Tasks in the web browser. It allows the user some control over the Tasks (create / remove).