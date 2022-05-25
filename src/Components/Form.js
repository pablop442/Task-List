import React from "react";
import Proptypes from "prop-types";

const Form = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <>
      <div className="container">
        <form className="row justify-content-center" onSubmit={handleSubmit}>
          <div className="col-sm-2 col-3 ">
            <select
              name="filter"
              className="form-select"
              onChange={props.onChange}
            >
              <option value="all">All</option>
              <option value="important">Important</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div className="col-sm-6 col-8">
            <input
              className="form-control"
              type="text"
              placeholder="Type a task"
              value={props.input}
              onChange={props.inputTextChanger}
            ></input>
          </div>
          <div className="col-sm-4 col-8 mt-sm-0 mt-3 ">
            <button className="btn btn-success me-2" onClick={props.addTodo}>
              Add To Do
            </button>
            <button className="btn btn-danger " onClick={props.deleteTodo}>
              Delete All
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

Form.propTypes = {
  input: Proptypes.string,
  inputTextChanger: Proptypes.func,
  addTodo: Proptypes.func,
  deleteTodo: Proptypes.func,
  onChange: Proptypes.func,
};

export default Form;
