import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  userToken: "",
};

export const LoginReducer = createAsyncThunk(
  "auth/Login",
  async (data, thunkAPI) => {
    try {
      return data;
    } catch (error) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.userToken = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(LoginReducer.fulfilled, (state, action) => {
      state.userToken = action.payload.email;
    });
  },
});

// Action creators are generated for each case reducer function
export const { logout } = authSlice.actions;

export default authSlice.reducer;
