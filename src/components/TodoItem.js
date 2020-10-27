import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    return <div>{this.props.todoItem.text}</div>;
  }
}

export default TodoItem;
