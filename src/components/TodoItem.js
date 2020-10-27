import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const {
      todoItem: { id },
    } = this.props;
    this.props.deleteTodoItem(id);
  }

  render() {
    const {
      todoItem: { text },
    } = this.props;
    return (
      <React.Fragment>
        <li>
          <span>{text}</span>
          <span onClick={this.onClick}>X</span>
        </li>
      </React.Fragment>
    );
  }
}

export default TodoItem;
