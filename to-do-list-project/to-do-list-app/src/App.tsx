import { useState } from 'react';
import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import { Todo } from './models/todo';

function App() {
  // const todos = [{id:'user1',todo: 'Learn React'}, {id:'user2', todo: 'Learn typescript'}];
  const [todos, setTodos] = useState<Todo[]>([]);


  const addToDoHandler = (todoText:string) => {
    const newTodo = {
      id:Math.random().toString(), 
      todo: todoText
    };

    setTodos((curr) => curr.concat(newTodo));
  };

  const removeToDoHandler = (todoId: string) => {
    setTodos(prevTodos =>  prevTodos.filter(todo => todo.id !==todoId));
  }

  return (
    <div>
      <NewTodo onAddTodo={addToDoHandler}/>
      <Todos items={todos} onRemoveToDo={removeToDoHandler}/>
    </div>
  );
}

export default App;
