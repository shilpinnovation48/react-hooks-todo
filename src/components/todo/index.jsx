import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faCheckSquare } from "@fortawesome/free-regular-svg-icons";
import s from "./Todo.module.scss";

const propTypes = {
  index: PropTypes.number.isRequired,
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }).isRequired,
  completeTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,  
}

const Todo = ({ index, todo, completeTodo, removeTodo }) => {
  return (
    <div
      className={s.todoList}
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      data-index={index}
      title={todo.text}
    >
      {!todo.isCompleted && (
        <span className={s.complete} onClick={() => completeTodo(index)}>
          <FontAwesomeIcon icon={faCheckSquare} size="1x" />
        </span>
      )}
      <span className={s.remove} onClick={() => removeTodo(index)}>
        <FontAwesomeIcon icon={faTrashAlt} size="1x" />
      </span>
      {todo.text}
    </div>
  );
};

Todo.propTypes = propTypes;
export default Todo;
