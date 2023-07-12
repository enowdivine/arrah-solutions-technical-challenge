import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/authReducer";
// import profileSlice from "./reducers/profileReducer";
// import messageSlice from "./reducers/messageReducer";

const store = configureStore({
  reducer: {
    auth: authSlice,
    // profile: profileSlice,
    // messenger: messageSlice,
  },
});
export default store;
