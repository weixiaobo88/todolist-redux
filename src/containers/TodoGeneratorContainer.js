import { connect } from "react-redux";
import TodoGenerator from "../components/TodoGenerator";
import { addTodoItem } from "../actions";

const mapDispatchToProps = (dispatch) => ({
  addTodoItem: (todoText) => dispatch(addTodoItem(todoText)),
});

export default connect(null, mapDispatchToProps)(TodoGenerator);
