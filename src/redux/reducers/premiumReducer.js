import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import premiumServices from "../services/premiumServices";

const initialState = {
  plans: [],
};

export const allPlans = createAsyncThunk("plan/plans", async (thunkAPI) => {
  try {
    return await premiumServices.allPlans();
  } catch (error) {
    const message =
      (error.message && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const premiumSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(allPlans.fulfilled, (state, action) => {
      state.plans = action.payload;
    });
  },
});

export const {} = premiumSlice.actions;

export default premiumSlice.reducer;
