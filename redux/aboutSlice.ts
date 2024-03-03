import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: [],
  error: {},
};

const url = "http://localhost:3001/";

export const getAboutData = createAsyncThunk(
  "about_work",
  async (_, thunkApi) => {
    try {
      const response = await axios.get(`${url}room_navbar`);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const AboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAboutData.pending, (state) => {
      (state.loading = true), (state.error = initialState.error);
    });
    builder.addCase(getAboutData.fulfilled, (state, action) => {
      (state.loading = false), (state.data = action.payload.data);
    });
    builder.addCase(getAboutData.rejected, (state, action) => {
      state.loading = false;
      // state.error = action.payload
    });
  },
});

export default AboutSlice.reducer;
