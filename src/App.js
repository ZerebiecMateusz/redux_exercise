import './App.css';
import AddTodo from './conteiners/AddTodo';

import ToDoList from './conteiners/ToDoList';

function App() {
  return (
    <div className="App">
      <h1>Hello Redux</h1>
      <AddTodo/>
      <ToDoList/>
    </div>
  );
}

export default App;
