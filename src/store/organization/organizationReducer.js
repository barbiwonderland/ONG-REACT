import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
	getOrganization,
	postOrganization,
} from "../../services/organizationService";

const getOrganizationThunk = createAsyncThunk(
	"organization/getOrganization",
	async () => {
		return await getOrganization(); //method in newsService.js
	}
);

const postOrganizationThunk = createAsyncThunk(
	"organization/postOrganization",
	async () => {
		return await postOrganization(); //method in newsService.js
	}
);

const organizationSlice = createSlice({
	name: "organization",
	initialState: {
		organization: {},
		loading: null,
    error: null,
    newOrganization: {},
	},
	extraReducers: {
		//getOrganizationThunk
		[getOrganizationThunk.pending]: (state, action) => {
			state.loading = true;
		},
		[getOrganizationThunk.fulfilled]: (state, action) => {
			state.organization = action.payload;
			state.loading = false;
		},
		[getOrganizationThunk.rejected]: (state, action) => {
			state.error = action.payload;
		},
		//postOrganizationThunk
		[postOrganizationThunk.pending]: (state, action) => {
			state.loading = true;
		},
		[postOrganizationThunk.fulfilled]: (state, action) => {
			state.newOrganization = action.payload;
			state.loading = false;
		},
		[postOrganizationThunk.rejected]: (state, action) => {
			state.error = action.payload;
		},
	},
});

export default organizationSlice.reducer
