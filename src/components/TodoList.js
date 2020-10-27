import React, { Component } from "react";
import TodoGroup from "./TodoGroup";
import TodoGeneratorContainer from "../containers/TodoGeneratorContainer";

class TodoList extends Component {
  render() {
    return (
      <div>
        <TodoGroup />
        <TodoGeneratorContainer />
      </div>
    );
  }
}

export default TodoList;
