import { connect } from "react-redux";
import TodoItem from "../components/TodoItem";
import { deleteTodoItem } from "../actions";

const mapDispatchToProps = (dispatch) => ({
  deleteTodoItem: (id) => dispatch(deleteTodoItem(id)),
});

export default connect(null, mapDispatchToProps)(TodoItem);
