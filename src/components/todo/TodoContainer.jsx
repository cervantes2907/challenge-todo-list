import React from "react";
import './TodoContainer.css'

const TodoContainer = ({ todo, todoDelete, todoToogleCompleted }) => {
  return (
    <>
      <div className="card_container">
        <div className="card_body">
          <h3 className="card_title ">{todo.task}</h3>
          <p className="card_student">{todo.student}</p>
          <div className="container_button">
          <button
            onClick={() => todoToogleCompleted(todo)}
            className="completar"
          >
            {todo.isCompleted ? "Completo" : "Incompleto"}
          </button>
             <button onClick={() => todoDelete(todo.id)} className="delete">
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoContainer;
