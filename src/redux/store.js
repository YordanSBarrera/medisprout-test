import { configureStore } from "@reduxjs/toolkit";
import commentsSlice from "./commentSlice";

export default configureStore({
  reducer: {
    comments: commentsSlice,
  },
});
