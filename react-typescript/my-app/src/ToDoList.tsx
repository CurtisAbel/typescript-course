import React from 'react';

interface TodolistProps {
    items: { id: string; task: string}[];
}

export const ToDoList: React.FC<TodolistProps> = ({items}) => {
    return (
        <ul>
            {items.map((todo) => (
                <li key={todo.id}>{todo.task}</li>
            ))}
        </ul>
    );
};
