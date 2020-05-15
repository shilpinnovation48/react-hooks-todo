import React, { useState } from "react";
import PropTypes from "prop-types";
import "./form.module.scss";

const propTypes = {
  onSubmit: PropTypes.func.isRequired,
  name: PropTypes.string,
};

const defaultProps = {
  name: "todo-form",
};

function TodoForm({ onSubmit, ...props }) {
  const [value, setValue] = useState("");

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    onSubmit(value); // Initiate onSubmit callback to parent
    setValue(""); // Clear input
  };

  return (
    <form onSubmit={handleSubmit} {...props}>
      <input
        required
        type="text"
        className="input"
        placeholder="Add TO-DO Here"
        value={value}
        onChange={handleOnChange}
      />
    </form>
  );
}

TodoForm.propTypes = propTypes;
TodoForm.defaultProps = defaultProps;

export default TodoForm;
