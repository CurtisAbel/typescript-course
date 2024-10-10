import React from 'react';
import { ToDoList, NewTodo, TodoListApp } from './components';

const App: React.FC = () => {
    type Todolist = {
        id: string;
        task: string;
        deadline: string;
    };

    const todos: Todolist[] = [
        { id: 'task 1', task: 'read book', deadline: 'tomorrow' },
        { id: 'task 2', task: 'gym', deadline: 'tomorrow' },
        { id: 'task 3', task: 'code', deadline: 'end of the day' },
    ];
    return (
        <div className="App">
            {/* <NewTodo />
            <ToDoList items={todos} /> */}
            <TodoListApp />
        </div>
    );
};

export default App;
