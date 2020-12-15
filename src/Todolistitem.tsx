import React from "react";

interface TodolistitemProps {
  item: list;
  toggleTodo: toggleTodo;
}

const Todolistitem: React.FC<TodolistitemProps> = ({ item, toggleTodo }) => {
  return (
    <label
      style={{ textDecoration: item.isFinished ? "line-through" : undefined }}
    >
      <input
        type="checkbox"
        checked={item.isFinished}
        onChange={() => {
          toggleTodo(item);
        }}
      />
      {item.title}
      <br />
    </label>
  );
};

export default Todolistitem;
