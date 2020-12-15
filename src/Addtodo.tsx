import React, { ChangeEvent, FormEvent } from "react";

interface Addtodoprops {
  addItem: addItem;
}

const Addtodo: React.FC<Addtodoprops> = ({ addItem }) => {
  const [todo, setTodo] = React.useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const addToform = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addItem(todo);
    setTodo("");
  };

  return (
    <div style={{ marginLeft: "2.5rem" }}>
      <form>
        <input type="text" value={todo} onChange={handleChange} />
        <button type="submit" onClick={addToform}>
          Add
        </button>
      </form>
    </div>
  );
};

export default Addtodo;
