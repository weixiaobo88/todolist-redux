import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoGroup extends Component {
  render() {
    return (
      <div>
        TodoGroup
        <TodoItem />
      </div>
    );
  }
}

export default TodoGroup;
