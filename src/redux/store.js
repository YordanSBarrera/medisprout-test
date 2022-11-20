import { configureStore } from "@reduxjs/toolkit";
import commentsSlice from "./commentSlice";
import loadingSlice from "./loadingSlice";

//la declaracion a continuacion es para que funcione ReduxDevTool en el navegador
const chromeRedux =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export default configureStore({
  reducer: {
    comments: commentsSlice,
    loading: loadingSlice,
  },
  chromeRedux,
});
