import React, { Component } from "react";

class Counter extends Component {
  state = {
    //props is a plain JS object that includes all attributes of an object
    value: this.props.value
  };

  // constructor() {
  //   super();
  //   //console.log("Constructor", this);
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  //arrow function instead of constructor; inherits 'this'
  handleIncrement = product => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={product => this.handleIncrement(product)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    //Object Destructuring
    const { count } = this.state;
    //could also use <h1>Zero</h1>
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
