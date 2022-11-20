import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    value: false,
  },
  reducers: {
    loadingOn(state) {
      state.value = true;
    },
    loadingOff(state) {
      state.value = false;
    },
  },
});
export const { loadingOff, loadingOn } = loadingSlice.actions;
export const loadingState = (state) => state.loading.value;

export default loadingSlice.reducer;
