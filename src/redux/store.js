import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/authReducer";
import soundSlice from "./reducers/soundReducer";
import premiumSlice from "./reducers/premiumReducer";

const store = configureStore({
  reducer: {
    auth: authSlice,
    sound: soundSlice,
    plans: premiumSlice,
  },
});
export default store;
