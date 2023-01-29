import React from 'react';

import Todo from '../models/todos';
import TodoItem from './TodoItem';

interface ITodos {
  items: Todo[];
}

const Todos: React.FC<ITodos> = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
