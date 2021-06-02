import React from "react";
import { useState } from "react";

export const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Title or Description can't be empty");
    } else {
      props.addTodo(title, description);
      setTitle("");
      setDescription("");
    }
  };
  return (
    <div className="container">
      <h3 className="text-center">Add Todo in Your List</h3>
      <form onSubmit={submit}>
        <div className="form-group mt-3">
          <label className="m-1" htmlFor="exampleInputTitle">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="form-control"
            id="exampleInputTitle"
            placeholder="Enter Your Title Here"
          />
        </div>
        <div className="form-group mt-3">
          <label className="m-1" htmlFor="exampleInputDescription">
            Description
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="form-control"
            id="exampleInputDescription"
            placeholder="Enter Your Description Here"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-primary mt-4">
          Add to the List
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
