import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const { reducer, actions } = createSlice({
  name: "todoReducer",
  initialState,
  reducers: {
    //add todo reducer
    addTodo: (state, action) => {
      return [...state, action.payload];
    },
    //delete todo reducer
    deleteTodo: (state, action) => {
      return state.filter((item) => {
        if (item.id !== action.payload) {
          return item;
        }
      });
    },
    //mark todo as completed reducer
    markTodo: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isMarked: !item.isMarked };
        } else {
          return item;
        }
      });
    },
  },
});
export default reducer;
export const { addTodo, deleteTodo, markTodo } = actions;
