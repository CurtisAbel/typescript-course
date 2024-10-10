import React, { useRef, useState } from 'react';

export const TodoListApp: React.FC = () => {
    const textInputRef = useRef<HTMLInputElement>(null);
    const [ToDoList, setTodoList] = useState<string[]>([]);

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;

        setTodoList((prevItems) => [...prevItems, enteredText]);
    };

    return (
        <>
            <form onSubmit={todoSubmitHandler}>
                <div>
                    <label htmlFor="todo-text">Todo Text</label>
                    <input type="text" id="todo-text" ref={textInputRef} />
                </div>
                <button type="submit">Add Task</button>
            </form>
            <ul>
                {ToDoList?.map((todo: string) => <li key={todo}>{todo}</li>)}
            </ul>
        </>
    );
};
