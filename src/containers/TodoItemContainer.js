import { connect } from "react-redux";
import TodoItem from "../components/TodoItem";
import { deleteTodoItem, toggleTodoItem } from "../actions";

const mapDispatchToProps = (dispatch) => ({
  deleteTodoItem: (id) => dispatch(deleteTodoItem(id)),
  toggleTodoItem: (id) => dispatch(toggleTodoItem(id)),
});

export default connect(null, mapDispatchToProps)(TodoItem);
