import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authServices from "../services/authServices";

const initialState = {
  userToken: "",
  user: null,
};

export const signup = createAsyncThunk(
  "authentication/signup",
  async (data, thunkAPI) => {
    try {
      return await authServices.signup(data);
    } catch (error) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk(
  "authentication/login",
  async (data, thunkAPI) => {
    try {
      return await authServices.login(data);
    } catch (error) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "authentication/resetPassword",
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

export const userDetails = createAsyncThunk(
  "authentication/user",
  async (userId, thunkAPI) => {
    try {
      return await authServices.userDetails(userId);
    } catch (error) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateUser = createAsyncThunk(
  "authentication/updateUser",
  async (data, thunkAPI) => {
    try {
      return await authServices.updateUser(data);
    } catch (error) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updatePassword = createAsyncThunk(
  "authentication/updatePassword",
  async (data, thunkAPI) => {
    try {
      return await authServices.updatePassword(data);
    } catch (error) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const planSubscription = createAsyncThunk(
  "authentication/planSubscription",
  async (data, thunkAPI) => {
    try {
      return await authServices.planSubscription(data);
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
  name: "authentication",
  initialState,
  reducers: {
    logout: (state) => {
      state.userToken = "";
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.fulfilled, (state, action) => {
        state.userToken = action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.userToken = action.payload;
      })
      .addCase(userDetails.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
