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
  } else if (action.type === "DELETE_TODO_ITEM") {
    return state.filter((todoItem) => todoItem.id !== action.id);
  } else if (action.type === "TOGGLE_TODO_ITEM") {
    const itemIndex = state.findIndex((item) => item.id === action.id);
    let todoList = [...state];
    todoList[itemIndex] = {
      ...todoList[itemIndex],
      done: !todoList[itemIndex].done,
    };
    return todoList;
  }
  return state;
};

export default combineReducers({ todoList });
