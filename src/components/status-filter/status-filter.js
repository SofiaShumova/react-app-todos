import React from 'react';
import './status-filter.css';

const StatusFilter = () => {
  return (
    <div className="btn-group btn-filter">
      <button type="button" className="btn btn-primary">
        All
      </button>
      <button type="button" className="btn btn-outline-primary">
        Active
      </button>
      <button type="button" className="btn btn-outline-primary">
        Done
      </button>
    </div>
  );
};
export default StatusFilter;
