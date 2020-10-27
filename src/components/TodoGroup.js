import React, { Component } from "react";
import TodoItemContainer from "../containers/TodoItemContainer";

class TodoGroup extends Component {
  render() {
    const { todoList } = this.props;
    return (
      <div>
        {todoList.map((item) => (
          <TodoItemContainer key={item.id} todoItem={item} />
        ))}
      </div>
    );
  }
}

export default TodoGroup;
