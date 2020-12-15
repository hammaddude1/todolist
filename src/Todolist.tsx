import React from "react";
import Todolistitem from "./Todolistitem";

interface TodoProps {
  list: Array<list>;
  toggleTodo: toggleTodo;
}

const Todolist: React.FC<TodoProps> = ({ list, toggleTodo }) => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}> TODOS</h2>
      <ul>
        {list.map((item) => (
          <Todolistitem item={item} key={item.title} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
