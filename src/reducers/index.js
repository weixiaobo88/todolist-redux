import { combineReducers } from "redux";
import { v4 as uuid } from "uuid";

const todoList = (state = [], action) => {
  if (action.type === "ADD_TODO_ITEM") {
    return [
      ...state,
      {
        id: uuid(),
        text: action.payload,
        done: false,
      },
    ];
  }
  return state;
};

export default combineReducers({ todoList });
