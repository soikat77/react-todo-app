import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./MyComponents/Header.js"; // default export
import { Todos } from "./MyComponents/Todos"; // default export
import Footer from "./MyComponents/Footer.js"; // default export
import AddTodo from "./MyComponents/AddTodo.js"; // default export
import { About } from "./MyComponents/About.js"; // name export

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    // console.log("onDelete Clicked", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, description) => {
    let slNo;
    if (todos.length === 0) {
      slNo = 0;
    } else {
      slNo = todos[todos.length - 1].slNo + 1;
    }
    let newTodo = {
      slNo: slNo,
      title: title,
      description: description,
    };
    setTodos([...todos, newTodo]);
    // console.log("adding this todo", title, description);
    // console.log(newTodo);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="My Todo Lists" searchBar={false} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              );
            }}
          ></Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

        <Footer userName="Soikat Alam" />
      </Router>
    </>
  );
}

export default App;
