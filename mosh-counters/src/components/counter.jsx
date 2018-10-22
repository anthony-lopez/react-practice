import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  // styles = {
  //   fontSize: 10,
  //   fontWeight: "bold"
  // };

  render() {
    return (
      <div>
        {/* this.styles */}
        <span style={{ fontSize: 30 }} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
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
