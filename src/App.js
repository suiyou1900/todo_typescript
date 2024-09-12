import './App.css';
import { useState } from 'react';

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
  }

  const handleChange=(e)=>{
    setInputValue(e.target.value);
  }

  const handleDelete=(id)=>{
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }

  const handleEdit = (id, value) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, inputValue: value };
      }
      return todo;
    });
    
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
          <li key={todo.id}><input 
          value={todo.inputValue} 
          onChange={(e) => handleEdit(todo.id, e.target.value)}
        />
        <button onClick={() => handleDelete(todo.id)}>削除する</button>
        </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
