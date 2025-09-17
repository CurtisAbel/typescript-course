import React from 'react';
import TodoItem from './TodoItem';
import {Items} from '../models/todo';

import styles from './Todos.module.css'



const Todos: React.FC<Items> = ({items, onRemoveToDo}) => {
  return (
    <>
    <ul className={styles.todos}>
      {items.map(item => <TodoItem id={item.id} todo={item.todo} onRemoveToDo={onRemoveToDo.bind(null, item.id)} />)}
    </ul>
    </>
  )
}

export default Todos