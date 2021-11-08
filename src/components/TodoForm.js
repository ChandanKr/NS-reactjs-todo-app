import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: new Date().getTime(),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <input
            placeholder="Update your item"
            value={input}
            autoComplete="off"
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="todo-input edit"
          />
          <button
            title="Click to Update"
            onClick={handleSubmit}
            className="todo-button edit"
          >
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Add a todo"
            value={input}
            autoComplete="off"
            onChange={handleChange}
            name="text"
            className="todo-input"
            ref={inputRef}
          />
          <button
            title="Click to add todo"
            onClick={handleSubmit}
            className="todo-button"
          >
            Add Todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;