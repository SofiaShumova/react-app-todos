import React, { Component } from 'react';
import AppHeader from '../app-header';
import TodoList from '../todo-list';
import SearchPanel from '../search-panel';
import StatusFilter from '../status-filter';
import ItemAddForm from '../item-add-form';

export default class App extends Component {
  ID = 1;
  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch'),
    ],
    searchText: '',
    active: null,
  };

  createTodoItem(label) {
    return { label, important: false, id: this.ID++, done: false };
  }

  toggleProperty(arr, id, prop) {
    return arr.map((todo) => {
      if (todo.id === id) todo[prop] = !todo[prop];
      return todo;
    });
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) =>
      this.toggleProperty(todoData, id, 'important')
    );
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => this.toggleProperty(todoData, id, 'done'));
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      return { todoData: todoData.filter((todo) => todo.id !== id) };
    });
  };

  addItem = (todo) => {
    this.setState(({ todoData }) => {
      return {
        todoData: todoData.concat(this.createTodoItem(todo)),
      };
    });
  };

  search = (text) => {
    this.setState({ searchText: text });
  };

  onActive = () => {
    this.setState({ active: true });
  };

  onDone = () => {
    this.setState({ active: false });
  };

  allVisible = () => {
    this.setState({ active: null });
  };

  filterItems(array, searchText = false, prop = false) {
    return array
      .filter((item) =>
        searchText
          ? item.label.toLowerCase().includes(searchText.toLowerCase())
          : true
      )
      .filter((item) => {
        if (prop === null) {
          return true;
        }
        return item.done !== prop;
      });
  }

  render() {
    const { todoData, searchText, active } = this.state;
    const doneCount = todoData.filter((todo) => todo.done).length;
    const todoCount = todoData.filter((todo) => !todo.done).length;
    const visibleTodos = this.filterItems(todoData, searchText, active);

    return (
      <div className="container">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="d-flex justify-content-between align-items-center">
          <div className="flex-grow-1">
            <SearchPanel onSearch={this.search} />
          </div>
          <div>
            <StatusFilter
              onActive={this.onActive}
              onDone={this.onDone}
              allVisible={this.allVisible}
            />
          </div>
        </div>
        <TodoList
          todos={visibleTodos}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm onAdded={this.addItem} />
      </div>
    );
  }
}

// TODO: SAVED IN LOCAL STORAGE
// TODO: FILTER STORAGE IN APP
