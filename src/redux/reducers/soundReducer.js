import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import soundServices from "../services/soundServices";

const initialState = {
  sounds: [],
};

export const sounds = createAsyncThunk("sound/sounds", async (thunkAPI) => {
  try {
    return await soundServices.sounds();
  } catch (error) {
    const message =
      (error.message && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const soundSlice = createSlice({
  name: "sound",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sounds.fulfilled, (state, action) => {
      state.sounds = action.payload;
    });
  },
});

export const {} = soundSlice.actions;

export default soundSlice.reducer;
