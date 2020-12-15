import React, { useState } from "react";
import Todolist from "./Todolist";
import Addtodo from "./Addtodo";

const list: Array<list> = [
  {
    title: "do some chores",
    isFinished: false,
  },

  {
    title: "do some shopping",
    isFinished: false,
  },

  {
    title: "play playstation",
    isFinished: false,
  },
];

const App: React.FunctionComponent = function () {
  const [todo, setTodo] = useState(list);

  console.log(todo);

  const toggleTodo = (isSelected: list) => {
    const newTodo = todo.map((list) => {
      if (list === isSelected) {
        return {
          ...list,
          isFinished: !list.isFinished,
        };
      }
      return list;
    });
    setTodo(newTodo);
  };

  const addNewtodo: addItem = (newTodo) => {
    newTodo.trim() !== "" &&
      setTodo([...todo, { title: newTodo, isFinished: false }]);
  };

  return (
    <div className="App">
      <Todolist list={todo} toggleTodo={toggleTodo} />
      <Addtodo addItem={addNewtodo} />
    </div>
  );
};

export default App;
