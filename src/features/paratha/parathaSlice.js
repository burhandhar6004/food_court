import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ServiceParatha from "./parathaService";
// import ServiceParatha from "./parathaService";

const prathaSlice = createSlice({
  name: "burhan",
  initialState: {
    parathas: [],
    paratha: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchParatha.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(fetchParatha.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.parathas = action.payload;
      })
      .addCase(fetchParatha.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      });
  },
});


export default prathaSlice.reducer;

// export const fecthPratha = createAsyncThunk("FETCH/PRATHA", async() => {
//   const response = await fetch("/app/paratha")
//   const data = await response.json();
//   console.log(data)
//   return response;
// });

export const fetchParatha = createAsyncThunk("FETCH/PARATHA", async () => {
  try {
    return await ServiceParatha.getParatha();
  } catch (error) {
    console.log(error);
  }
});
