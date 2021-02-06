import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({
  label,
  onDeleted,
  onToggleDone,
  onToggleImportant,
  important,
  done,
}) => {
  return (
    <span
      className={`todo-list-item d-flex justify-content-between align-items-center 
        ${important && 'text-primary important'} 
        ${done && 'done'}`}
    >
      <span className="todo-list-item-label" onClick={onToggleDone}>
        {label}
      </span>
      <div className="col-3 d-flex justify-content-around">
        <button
          type="button"
          className="btn btn-outline-success col-5"
          onClick={onToggleImportant}
        >
          <i className="fas fa-exclamation"></i>
        </button>
        <button
          type="button"
          className="btn btn-outline-danger col-5"
          onClick={onDeleted}
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </span>
  );
};
export default TodoListItem;
