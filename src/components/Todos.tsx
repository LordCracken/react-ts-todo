import React from 'react';

import Todo from '../models/todos';
import TodoItem from './TodoItem';

import classes from './Todos.module.css';

interface ITodos {
  items: Todo[];
  onRemoveTodo: (id: string) => void;
}

const Todos: React.FC<ITodos> = ({ items, onRemoveTodo }) => {
  return (
    <ul className={classes.todos}>
      {items.map(item => (
        <TodoItem key={item.id} text={item.text} onRemoveTodo={onRemoveTodo.bind(null, item.id)} />
      ))}
    </ul>
  );
};

export default Todos;
