import './App.css';

import AddTodo from './conteiners/AddTodo';
import ToDoList from './conteiners/ToDoList';
import Footer from './conteiners/Footer';

function App() {
  return (
    <div className="App">
      <h1>Hello Redux</h1>
      <AddTodo/>
      <ToDoList/>
      <Footer/>
    </div>
  );
}

export default App;
