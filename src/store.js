import { configureStore } from "@reduxjs/toolkit";
import messengerReducer from "./features/messenger/messengerSlice";
import remoteReducer from "./features/remote/remoteSlice";

export default configureStore({
  reducer: {
    messenger: messengerReducer,
    remote: remoteReducer,
  },
});
