import React from 'react';
import { ToDoList } from './ToDoList';
const App: React.FC = () => {
    type Todolist ={
        id: string;
        task: string;
    }

    const todos: Todolist[] = [
        { id: 'task 1', task: 'read book' },
        { id: 'task 2', task: 'gym' },
        { id: 'task 3', task: 'code' },
    ];
    return (
        <div className="App">
            <ToDoList items={todos} />
        </div>
    );
};

export default App;
