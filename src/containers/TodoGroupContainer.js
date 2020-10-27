import { connect } from "react-redux";
import TodoGroup from "../components/TodoGroup";

const mapStateToProps = (state) => ({
  todoList: state.todoList,
});

export default connect(mapStateToProps)(TodoGroup);
