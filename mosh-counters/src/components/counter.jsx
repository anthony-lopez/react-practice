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
    console.log(this.props);

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
        <button
          onClick={product => this.handleIncrement(product)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          //raise event
          onClick={this.props.onDelete}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatValue() {
    //Object Destructuring
    const { value } = this.state;
    //could also use <h1>Zero</h1>
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
