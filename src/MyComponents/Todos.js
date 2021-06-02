import React from "react";
import TodoItems from "./TodoItems";

export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="text-center m-3">List Goes Here</h3>
      {props.todos.length === 0
        ? "You have nothing to do now. Add Something for future."
        : props.todos.map((everyTodo, i) => {
            return (
              <TodoItems key={i} todo={everyTodo} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
};
