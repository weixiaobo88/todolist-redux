import React, { Component } from "react";
import "./TodoItem.css";
class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
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
      todoItem: { text, done },
    } = this.props;
    return (
      <React.Fragment>
        <div className="todo">
          <span className={done ? "mark-done" : ""} onClick={this.onToggle}>
            {text}
          </span>
          <span className="times" onClick={this.onDelete}>
            X
          </span>
        </div>
      </React.Fragment>
    );
  }
}

export default TodoItem;
