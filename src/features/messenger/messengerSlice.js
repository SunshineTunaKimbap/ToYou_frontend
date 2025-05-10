import { createSlice } from "@reduxjs/toolkit";

export const messengerSlice = createSlice({
  name: "messenger",
  initialState: {
    value: true,
  },
  reducers: {
    activate: (state) => {
      state.value = true;
    },
    deactivate: (state) => {
      state.value = false;
    },
  }
})

export const { activate, deactivate } = messengerSlice.actions;

export default messengerSlice.reducer;
