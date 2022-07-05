import React, { useState } from "react";
import './TodoItem.css'

const initialFormValues = {
  task: "",
  student: "",
  isCompleted: false,
  version: 0,
};

const TodoItem = ({ todoAdd }) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const { task, student } = formValues;
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);



  const handleInputChange = async (e) => {
    const changedFormValues = {
      ...formValues,
      [e.target.name]: e.target.value,
    };

    setFormValues(changedFormValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() === "") {
      setError("Debes indicar un título");
      return;
    }

    if (student.trim() === "") {
      setError("Debes indicar un Responsable");
      return;
    }

    if(todoAdd){
        todoAdd(formValues);
        setSuccessMessage("Agregado con exito");
        setFormValues(initialFormValues);
    }

    setTimeout(() => {
      setSuccessMessage(null);
    }, 2000);

    setError(null);
  };

  return (
    <div className="todoItemContainer">
      <h2 className="todoItemTitle">
         Agregar Nueva tarea
      </h2>
      <form className="formTodoItem" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tarea"
          className="todoItemInput"
          value={task}
          name="task"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Responsable"
          className="todoItemInput"
          value={student}
          name="student"
          onChange={handleInputChange}
        />
        <button className="add">
           Agregar tarea
        </button>
      </form>

      {error && <div className="error">{error}</div>}

      {successMessage && (
        <div className="alert">{successMessage}</div>
      )}
    </div>
  );
};

export default TodoItem;
