import React, { Component } from "react";

class TodoGenerator extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onAdd = this.onAdd.bind(this);

    this.state = {
      todoText: "",
    };
  }

  onChange(event) {
    this.setState({ todoText: event.target.value });
  }

  onAdd() {
    this.props.addTodoItem(this.state.todoText);
    this.setState({ todoText: "" });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          name="todoText"
          id="todoText"
          value={this.state.todoText}
          onChange={this.onChange}
        />
        <input type="button" value="add" onClick={this.onAdd} />
      </div>
    );
  }
}

export default TodoGenerator;
