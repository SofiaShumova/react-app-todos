import React from 'react';

const AppHeader = ({ toDo, done }) => {
  return (
    <div>
      <h1 className="display-3">My todo list</h1>
      <span>
        {toDo} more todo, {done} done
      </span>
    </div>
  );
};

export default AppHeader;
