export const addTodoItem = (todoText) => ({
  type: "ADD_TODO_ITEM",
  payload: todoText,
});

export const deleteTodoItem = (id) => ({
  type: "DELETE_TODO_ITEM",
  id,
});

export const toggleTodoItem = (id) => ({
  type: "TOGGLE_TODO_ITEM",
  id,
});
