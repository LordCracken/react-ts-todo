import React, { useRef } from 'react';
import classes from './NewTodo.module.css';

interface INewTodo {
  onAddTodo: (text: string) => void;
}

const NewTodo: React.FC<INewTodo> = ({ onAddTodo }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = inputRef.current!.value;

    if (enteredText.trim().length === 0) return;

    onAddTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">{'Todo text'}</label>
      <input type="text" id="text" ref={inputRef} />
      <button>{'Add Todo'}</button>
    </form>
  );
};

export default NewTodo;
