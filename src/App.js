import './App.css';
import { useState,useEffect } from 'react';

function App() {

  const[inputValue,setInputValue]=useState('');
  const[todos,setTodos]=useState([]);
   

  const handleClick=(e)=>{
  e.preventDefault();

  if (inputValue === '') {
    return;
  }

  const newTodo = {
    id: todos.length + 1, 
    inputValue: inputValue
  };

  setTodos([...todos, newTodo]);
  setInputValue('');
  console.log(newTodo);
  }

  const handleChange=(e)=>{
    setInputValue(e.target.value);
  }

  const handleDelete=(id)=>{
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }


  return (
    <div className="App">
     <h1>Todo</h1>
     <form onSubmit={handleClick}>
      <input type='text' placeholder='enter to add' value={inputValue} onChange={handleChange}></input>
      <button>送信</button>
     </form>

     <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.inputValue}<button onClick={() => handleDelete(todo.id)}>削除する</button></li>
          ))}
      </ul>
    </div>
  );
}

export default App;
