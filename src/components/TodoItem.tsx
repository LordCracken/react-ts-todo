import React from 'react';
import classes from './TodoItem.module.css';

interface ITodoItem {
  text: string;
  onRemoveTodo: () => void;
}

const TodoItem: React.FC<ITodoItem> = ({ text, onRemoveTodo }) => {
  return (
    <li className={classes.item} onClick={onRemoveTodo}>
      {text}
    </li>
  );
};

export default TodoItem;
