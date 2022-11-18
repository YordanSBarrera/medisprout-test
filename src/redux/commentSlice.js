import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    body: "Body",
    email: "email@test.inical",
    id: 1,
    name: "inicial",
    postId: 1,
  },
];

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

export default commentsSlice.reducer;
