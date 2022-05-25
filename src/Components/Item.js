import React from "react";
import Proptypes from "prop-types";
import {
  BsFillTrashFill,
  BsFillCheckCircleFill,
  BsFillBookmarkStarFill,
} from "react-icons/bs";

const Item = (props) => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-6 col-12">
            <li className={props.className}>
              <div className="row">
                <div className="col-1 me-2">
                  <button
                    className="important-btn "
                    title="Mark as Important"
                    onClick={props.importantTodo}
                  >
                    <BsFillBookmarkStarFill className="icon-style" />
                  </button>
                </div>
                <div className="col-6 text-break">{props.todo}</div>
                <div className="col-4">
                  <button
                    className="close-btn "
                    onClick={props.removeTodo}
                    title="Delete"
                  >
                    <BsFillTrashFill className="icon-style" />
                  </button>

                  <button
                    className="done-btn me-2"
                    onClick={props.completedTodo}
                    title="Mark as Done"
                  >
                    <BsFillCheckCircleFill className="icon-style" />
                  </button>
                </div>
              </div>
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

Item.propTypes = {
  todo: Proptypes.string,
  removeTodo: Proptypes.func,
  importantTodo: Proptypes.func,
  className: Proptypes.string,
  completedTodo: Proptypes.func,
};

export default Item;
