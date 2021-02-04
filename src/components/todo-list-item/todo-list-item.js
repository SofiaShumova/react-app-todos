import React from 'react';

const TodoListItem = ({ label, important = false }) => {
  const style = { fontWeight: important && '700' };
  return (
    <span
      className={`todo-list-item d-flex justify-content-between align-items-center ${
        important && 'text-primary'
      }`}
      style={style}
    >
      <span className="todo-list-item-label">{label}</span>
      <div className="col-3 d-flex justify-content-around">
        <button type="button" className="btn btn-outline-success col-5">
          <i className="fas fa-exclamation"></i>
        </button>
        <button type="button" className="btn btn-outline-danger col-5">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </span>
  );
};

export default TodoListItem;
