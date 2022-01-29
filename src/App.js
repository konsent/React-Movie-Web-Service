import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [Todo, setTodo] = useState("");
  const [Todos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (Todo === "") {
      return;
    }

    setTodos((currentArray) => [Todo, ...currentArray]);
    setTodo("");
  };
  console.log(Todos);

  return (
    <div>
      <h1> My To-dos ({Todos.length}개)</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={Todo}
          type="text"
          placeholder="Write your Todo"
        ></input>
        <button>Add To do</button>
      </form>
    </div>
  );
}

export default App;
