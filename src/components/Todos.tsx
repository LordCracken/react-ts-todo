import React from 'react';
import Todo from '../models/todos';

interface ITodos {
  items: Todo[];
}

const Todos: React.FC<ITodos> = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
