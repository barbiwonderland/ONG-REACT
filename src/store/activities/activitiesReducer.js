import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  listActivities,
  createActivity,
  editActivity,
  deleteActivity,
} from "../../services/activitiesService";

const initialState = { activitiesList: [], status: "idle", error: null };

export const fetchActivities = createAsyncThunk(
  "activities/fetchActivities",
  async () => {
    const { data } = await listActivities();
    return data;
  }
);

export const postNewActivity = createAsyncThunk(
  "activities/postNewActivity",
  async (newActivity) => {
    const { data } = await createActivity(newActivity);
    return data;
  }
);

export const modifyActivity = createAsyncThunk(
  "activities/modifyActivity",
  async (activityData) => {
    const { data } = await editActivity(activityData);
    return data;
  }
);

export const removeActivity = createAsyncThunk(
  "activities/removeActivity",
  async (activityId) => {
    const { data } = await deleteActivity(activityId);
    return data;
  }
);

const activitiesSlice = createSlice({
  name: "activities",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchActivities.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchActivities.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.activitiesList = action.payload.data;
    },
    [fetchActivities.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [postNewActivity.pending]: (state, action) => {
      state.status = "loading";
    },
    [postNewActivity.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.activitiesList = state.activitiesList.push(action.payload.data);
    },
    [postNewActivity.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [modifyActivity.pending]: (state, action) => {
      state.status = "loading";
    },
    [modifyActivity.fulfilled]: (state, action) => {
      state.status = "succeeded";
      const modifiedActivity = state.activitiesList.find(
        (activity) => activity.id === action.payload.data.id
      );

      if (modifiedActivity) {
        for (const property in modifiedActivity) {
          modifiedActivity[property] = action.payload.data[property];
        }
      }
    },
    [modifyActivity.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [removeActivity.pending]: (state, action) => {
      state.status = "loading";
    },
    [removeActivity.fulfilled]: (state, action) => {
      state.status = "succeeded";
      const newActivities = state.activitiesList.filter(
        (activity) => activity.id !== action.payload.data.id
      );
      state.activitiesList = newActivities;
    },
    [removeActivity.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

//selectors
export const selectAllActivities = (state) => state.activities.activitiesList;
export const selectActivitiesStatus = (state) => state.activities.status;

export default activitiesSlice.reducer;
