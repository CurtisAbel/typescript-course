import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Todo } from '../models/todo';
import styles from './TodoItem.module.css'

const TodoItem: React.FC<Todo> = ({id, todo, onRemoveToDo}) => {
  return <li className={styles.item} key={id}>{todo}
  <button onClick={onRemoveToDo}>
    <FontAwesomeIcon icon={faTrash} />
  </button>
  </li>
   
}

export default TodoItem;