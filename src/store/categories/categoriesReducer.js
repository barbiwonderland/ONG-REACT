import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {listCategories, createCategory, editCategories, deleteCategories} from "../../services/categoriesService"


export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const data  = await listCategories()
    return data;
  }
);

export const createCategorie = createAsyncThunk(
  "categorie/createCategorie",
  async (newCategorie) => {
    const { data } = await createCategory(newCategorie);
    return data;
  }
);

export const editCategorie = createAsyncThunk(
  "categorie/editCategorie",
  async (newCategorie) => {
    const { data } = await editCategories(newCategorie.id, newCategorie);
    return data
  }
);

export const deleteCategorie = createAsyncThunk(
  "categorie/deleteCategorie",
  async (categorie) => {
    const { data } = await deleteCategories(categorie.id);
    return data;
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState:{ categoriesList: [], status:null , error: null },
  
  extraReducers: {


    [fetchCategories.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.status = "success";
      state.categoriesList = action.payload.data.data;
    },
    [fetchCategories.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },


    [createCategorie.pending]: (state, action) => {
      state.status = "loading";
    },
    [createCategorie.fulfilled]: (state, action) => {
      state.status = "success";
      state.categoriesList = state.categoriesList.push(action.payload.data);
    },
    [createCategorie.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },


    [editCategorie.pending]: (state, action) => {
      state.status = "loading";
    },
    [editCategorie.fulfilled]: (state, action) => {
      state.status = "success"

      const index = state.categoriesList.findIndex(categ=>{if(categ.id===action.payload.data.id) return true})
      if(index>=0){
        state.categoriesList.splice(index,1,action.payload.data)
      }
      
    },
    [editCategorie.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },


    [deleteCategorie.pending]: (state, action) => {
      state.status = "loading";
    },
    [deleteCategorie.fulfilled]: (state, action) => {
      state.status = "success";
      const newCategoriesList = state.categoriesList.filter(
        (categorie) => categorie.id !== action.payload.data.id
      );
      state.categoriesList = newCategoriesList;
    },
    [deleteCategorie.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    }
  }
});

// selectors
export const selectAllCategories = (state) => state.categoriesList;
export const selectCategoriesStatus = (state) => state.status;

export default categoriesSlice.reducer;
