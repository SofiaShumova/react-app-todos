import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';

import './todo-list.css';

const TodoList = ({ todos }) => {
  return (
    <ul className="list-group todo-list w-100">
      {todos.map((todo) => {
        const { id, ...todoProps } = todo;
        return (
          <li className="list-group-item" key={id}>
            <TodoListItem {...todoProps} />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
