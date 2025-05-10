import { configureStore } from "@reduxjs/toolkit";
import messengerReducer from "./features/messenger/messengerSlice";

export default configureStore({
  reducer: {
    messenger: messengerReducer,
  },
});
