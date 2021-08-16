import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { action } from "commander";

import { login, register } from "../../services/authService";

export const registerThunk = createAsyncThunk(
	"auth/register",
	async (personData) => {
		await register(personData);
	}
);

export const loginThunk = createAsyncThunk(
	"auth/login",
	async (email, password) => {
		await login(email, password);
	}
);

const authSlice = createSlice({
	name: "auth",
	initialState: {
		user: {},
		loading: false,
		error: null,
	},
	extraReducers: {
		//registerThunk
		[registerThunk.pending]: (state, action) => {
			state.loading = true;
		},
		[registerThunk.fulfilled]: (state, { payload }) => {
			state.user = payload;
			state.loading = false;
		},
		[registerThunk.rejected]: (state, action) => {
			state.error = action.error;
    },
    //loginThunk
    [loginThunk.pending]: (state, action) => {
      state.loading = true
    },
    [loginThunk.fulfilled]: (state, action) => {
      state.user = action.payload
      state.loading = false
    },
    [loginThunk.rejected]: (state, action) => {
      state.error = action.error
    }
	},
});

export default authSlice.reducer;

//action creator
/*export const userLoginSuccess = (email, password) => {
  const { data } = login(email, password);
  return {
    type: USER_LOGIN_SUCCESS,
    payload: data,
  };
};

export const userLogoutSuccess = () => {
  return {
    type: USER_LOGOUT_SUCCESS,
  };
};

const initialState = {
  user: {},
  isAuthenticated: false,
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.isAuthenticated = false;
      state.user = {};
    },
    register: (state, action) => {
      state.user.name = action.payload.name;
      state.user.password = action.payload.password;
      state.user.email = action.payload.email;
      state.user.token = action.payload.token;
    },
  },
  extraReducers: {
    [fetchLoginThunk.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchLoginThunk.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.user = action.payload.data;
      state.isAuthenticated = "true";
    },
    [fetchLoginThunk.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default authReducer;*/
