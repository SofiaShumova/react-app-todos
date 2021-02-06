import React, { Component } from 'react';
import './status-filter.css';

export default class StatusFilter extends Component {
  state = {
    all: true,
    active: false,
    done: false,
  };

  onClick = (button) => {
    this.setState((state) => {
      const newState = { ...state };

      Object.keys(newState).forEach((key) => {
        if (newState[key]) {
          newState[key] = false;
        }
      });

      newState[button] = true;

      return newState;
    });
  };
  getClassName(val) {
    return `btn ${val ? 'btn-primary' : 'btn-outline-primary'} `;
  }
  render() {
    const { onActive, onDone, allVisible } = this.props;
    const { all, active, done } = this.state;
    return (
      <div className="btn-group btn-filter">
        <button
          onClick={() => {
            allVisible();
            this.onClick('all');
          }}
          type="button"
          className={this.getClassName(all)}
        >
          All
        </button>
        <button
          onClick={() => {
            onActive();
            this.onClick('active');
          }}
          type="button"
          className={this.getClassName(active)}
        >
          Active
        </button>
        <button
          onClick={() => {
            onDone();
            this.onClick('done');
          }}
          type="button"
          className={this.getClassName(done)}
        >
          Done
        </button>
      </div>
    );
  }
}
