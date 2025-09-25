import React, {useState} from 'react';
import { Todo } from '../models/todo';

interface TodoContext {
    items: Todo[],
    addTodo: (text:string) => void;
    removeTodo: (id:string) => void;
}
export const TodosContext = React.createContext<TodoContext>({
    items: [],
    addTodo: () => {},
    removeTodo: (id:string) => {}
});

 const TodosContextProvider: React.FC<{ children: React.ReactNode }> = (props) => {
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

  const contextValue: TodoContext = {
    items: todos,
    addTodo: addToDoHandler,
    removeTodo: removeToDoHandler
  }

    return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>
}

export default TodosContextProvider;