import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ Name: "Pedro" }];

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComments(state, action) {
      state.push(action.payload);
    },
  },
});
export const { addComments } = commentsSlice.actions;
export const commentsList = (state) => state.comments.slice(-1)[0];

export default commentsSlice.reducer;
