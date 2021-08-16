import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getNews, createNews, editNews ,deleteNews} from '../../services/newsService'

export const getNewsThunk = createAsyncThunk("news/getNewsThunk", async () => {
	return await getNews(); //method in newsService.js
});

const createNewsThunk = createAsyncThunk("news/postNewsThunk", async (news) => {
	return await createNews(news).data; //method in newsService.js
});

const editNewsThunk = createAsyncThunk("news/postNewsThunk", async (news) => {
	return await editNews(news).data; //method in newsService.js
});

const deleteNewsThunk = createAsyncThunk("news/postNewsThunk", async (news) => {
	return await deleteNews(news); //method in newsService.js
});

const newsSlice = createSlice({
	name: "news",
	initialState: {
		newsList: [],
		loading: null,
		error: null,
		newsItem: {},
	},
	extraReducers: {
		//getNews
		[getNewsThunk.pending]: (state, action) => {
			state.loading = true;
		},
		[getNewsThunk.fulfilled]: (state, action) => {
			state.newsList = action.payload.data.data;
			state.loading = false;
		},
		[getNewsThunk.rejected]: (state, action) => {
			state.error = action.payload;
		},
		//createNewsThunk
		[createNewsThunk.pending]: (state, action) => {
			state.loading = true;
		},
		[createNewsThunk.fulfilled]: (state, action) => {
			state.newsItem = action.payload;
			state.loading = false;
		},
		[createNewsThunk.rejected]: (state, action) => {
			state.error = action.payload;
		},
		//editNewsThunk
		[editNewsThunk.pending]: (state, action) => {
			state.loading = true;
		},
		[editNewsThunk.fulfilled]: (state, action) => {
			state.newsItem = action.payload;
			state.loading = false;
		},
		[editNewsThunk.rejected]: (state, action) => {
			state.error = action.payload;
		},
		//deleteNewsThunk 
		[deleteNewsThunk.pending]: (state, action) => {
			state.loading = true;
		},
		[deleteNewsThunk.fulfilled]: (state, action) => {
			state.newsItem = action.payload;
			state.loading = false;
		},
		[deleteNewsThunk.rejected]: (state, action) => {
			state.error = action.payload;
		},
	},
});

export default newsSlice.reducer;
