import React from "react";
import s from "./Todos.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretSquareDown,
  faCheckSquare,
  faCaretSquareUp,
} from "@fortawesome/free-regular-svg-icons";
import TodoForm from "../../components/form";
import Todo from "../../components/todo";
import { useTodosState } from "../../hooks/useTodosState";

function Todos() {
  const {
    todos,
    completeTodoCount,
    todoToggle,
    addTodos,
    completeTodo,
    removeTodo,
    toggleInput,
  } = useTodosState([]);

  return (
    <section id={s.container}>
      <div className={s.titleSection}>
        <div className={s.title}>
          <h1>To-Do List</h1>
        </div>
        {todoToggle && (
          <FontAwesomeIcon
            className={s.toggleIcons}
            icon={faCaretSquareUp}
            onClick={toggleInput}
            color="green"
            size="lg"
          />
        )}
        {!todoToggle && (
          <FontAwesomeIcon
            className={s.toggleIcons}
            icon={faCaretSquareDown}
            onClick={toggleInput}
            color="green"
            size="lg"
          />
        )}
      </div>
      {todoToggle && (
        <div className={s.bodySection}>
          <TodoForm name="todo-form" onSubmit={addTodos} />
          {todos.map((todo, i) => (
            <Todo
              key={`${todo.text}${i}`}
              index={i}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
        </div>
      )}
      <div className={s.footerSection}>
        <div>
          <FontAwesomeIcon icon={faCheckSquare} size="lg" /> --{" "}
          {completeTodoCount}
        </div>
      </div>
    </section>
  );
}

export default Todos;
