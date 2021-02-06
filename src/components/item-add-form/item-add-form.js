import React from 'react';
import './item-add-form.css';

const ItemAddForm = ({ onAdded }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const label = e.target.label.value;
    if (label) {
      onAdded(label);
      e.target.reset();
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="d-flex justify-content-between align-items-center"
    >
      <input
        type="text"
        className="form-control"
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        name="label"
        placeholder="Enter a new todo...."
      />
      <button type="submit" className=" col-3 btn btn-primary add-panel-btn">
        Add Todo
      </button>
    </form>
  );
};

export default ItemAddForm;
