import React from "react";
import Todo from "./TodoContainer";
import './CreateTodo.css'

const CreateTodo = ({
  todos,
  todoDelete,
  todoToogleCompleted,
 
}) => {
  return (
    <div>
      <h2 className="title_task_app"> Tasks List</h2>

      {todos.length === 0 ? (
        <div className="alert alert-primary">
          No hay tareas. Por favor agrega una 
        </div>
      ) : (
        todos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            todoDelete={todoDelete}
            todoToogleCompleted={todoToogleCompleted}
         
          />
        ))
      )}
    </div>
  );
};

export default CreateTodo;
