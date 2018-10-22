import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div>
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </div>
    );
  }

  formatCount() {
    //Object Destructuring
    const { count } = this.state;
    //could also use <h1>Zero</h1>
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
