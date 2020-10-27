import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onDelete.bind(this);
    this.onToggle = this.onToggle.bind(this);
  }

  onToggle() {
    const {
      todoItem: { id },
    } = this.props;
    this.props.toggleTodoItem(id);
  }

  onDelete() {
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
          <span onClick={this.onToggle}>{text}</span>
          <span onClick={this.onDelete}>X</span>
        </li>
      </React.Fragment>
    );
  }
}

export default TodoItem;
