import { useEffect, useState } from "react";

export const useTodosState = (intialTodosState) => {
  const getTodosFromStorage = () =>
    JSON.parse(localStorage.getItem("todos")) || intialTodosState;

  const [todos, setTodos] = useState(getTodosFromStorage);
  const [completeTodoCount, setCompleteTodoCount] = useState(0);
  const [todoToggle, setTodoToggle] = useState(false);

  useEffect(() => {
    const completedTodos = (todos) => {
      let count = 0;
      todos.forEach((todo) => {
        if (todo.isCompleted) count++;
      });
      return count;
    };
    setCompleteTodoCount(completedTodos(todos));
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const toggleInput = () => {
    setTodoToggle(!todoToggle);
  };
  const addTodos = (text) => {
    const newTodo = [...todos, { text, isCompleted: false }];
    setTodos(newTodo);
  };

  const completeTodo = (i) => {
    const shallowTodo = [...todos];
    shallowTodo[i].isCompleted = true;
    setTodos(shallowTodo);
  };

  const removeTodo = (i) => {
    const shallowTodo = [...todos];
    shallowTodo.splice(i, 1);
    setTodos(shallowTodo);
  };

  return {
    todos,
    completeTodoCount,
    todoToggle,
    addTodos,
    completeTodo,
    removeTodo,
    toggleInput,
  };
};
