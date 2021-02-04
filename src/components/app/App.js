import React from 'react';
import AppHeader from '../app-header';
import TodoList from '../todo-list';
import SearchPanel from '../search-panel';
import StatusFilter from '../status-filter';

const App = () => {
  const todoData = [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Make Awesome App', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 },
  ];
  return (
    <div className="container">
      <AppHeader />
      <div className="d-flex justify-content-between align-items-center">
        <div className="flex-grow-1">
          <SearchPanel />
        </div>
        <div>
          <StatusFilter />
        </div>
      </div>
      <TodoList todos={todoData} />
    </div>
  );
};

export default App;
