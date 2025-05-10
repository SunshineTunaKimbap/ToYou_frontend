import { createSlice } from "@reduxjs/toolkit";

export const remoteSlice = createSlice({
  name: "remote",
  initialState: {
    value: "name",
  },
  reducers: {
    setRemote: (state, action) => {
      const { newRemote } = action;

      state.value = newRemote;
    },
  }
})

export const { setRemote } = remoteSlice.actions;

export default remoteSlice.reducer;
