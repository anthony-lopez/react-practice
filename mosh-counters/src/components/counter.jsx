import React, { Component } from "react";

class Counter extends Component {
  //local state, commented out for single source of truth
  // state = {
  //   //props is a plain JS object that includes all attributes of an object
  //   value: this.props.counter.value
  // };

  // constructor() {
  //   super();
  //   //console.log("Constructor", this);
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  //arrow function instead of constructor; inherits 'this'
  //commented out due to no more local state
  // handleIncrement = product => {
  //   console.log(product);
  //   this.setState({ value: this.state.value + 1 });
  // };

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax Call and get new data from server
    }
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    //console.log(this.props);
    console.log("Counter - Rendered");

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          //raise event
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatValue() {
    //Object Destructuring
    const { value } = this.props.counter;
    //could also use <h1>Zero</h1>
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
