import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import notification from "../services/notification";

const initialState = {};

export const saveToken = createAsyncThunk(
  "notification/saveToken",
  async (data, thunkAPI) => {
    try {
      return await notification.saveToken(data);
    } catch (error) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const premiumSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = premiumSlice.actions;

export default premiumSlice.reducer;
