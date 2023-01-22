import React from 'react';

interface ITodos {
  items: string[];
}

const Todos: React.FC<ITodos> = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;
