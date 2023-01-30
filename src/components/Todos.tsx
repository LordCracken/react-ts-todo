import React from 'react';

import Todo from '../models/todos';
import TodoItem from './TodoItem';

import classes from './Todos.module.css';

interface ITodos {
  items: Todo[];
}

const Todos: React.FC<ITodos> = ({ items }) => {
  return (
    <ul className={classes.todos}>
      {items.map(item => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
