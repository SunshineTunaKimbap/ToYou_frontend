import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {"name": "", "school": ""},
  },
  reducers: {
    setUser: (state, action) => {
      const { name, school } = action.payload;

      state.value = {name, school};
    },
  }
})

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
