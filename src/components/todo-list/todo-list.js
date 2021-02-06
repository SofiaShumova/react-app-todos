import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';

import './todo-list.css';

const TodoList = ({ todos, onDeleted, onToggleDone, onToggleImportant }) => {
  return (
    <ul className="list-group todo-list w-100">
      {!todos.length && <span>Todos not found....</span>}
      {!!todos.length &&
        todos.map((todo) => {
          const { id, ...todoProps } = todo;
          return (
            <li className="list-group-item" key={id}>
              <TodoListItem
                {...todoProps}
                onDeleted={() => onDeleted(id)}
                onToggleDone={() => onToggleDone(id)}
                onToggleImportant={() => onToggleImportant(id)}
              />
            </li>
          );
        })}
    </ul>
  );
};

export default TodoList;
