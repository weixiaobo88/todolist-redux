import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoGroup extends Component {
  render() {
    const { todoList } = this.props;
    return (
      <div>
        {todoList.map((item) => (
          <TodoItem key={item.id} todoItem={item} />
        ))}
      </div>
    );
  }
}

export default TodoGroup;
