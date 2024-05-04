import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import serviceSoup from "./soupService";


const soupSlice = createSlice({
  name: "soup",
  initialState: {
    soups: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
  },
  reducers: {},

  extraReducers : (builder)=>{
    builder.addCase(fetchSoup.pending, (state,action)=>{
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    }).addCase(fetchSoup.fulfilled, (state,action)=>{
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.soups = action.payload;
    }).addCase(fetchSoup.rejected, (state,action)=>{
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    })
  }

});

export default soupSlice.reducer;


// export const fecthPratha = createAsyncThunk("FETCH/PRATHA", async() => {
//   const response = await fetch("/app/paratha")
//   const data = await response.json();
//   console.log(data)
//   return response;
// });

export const fetchSoup = createAsyncThunk("FETCH/SOUP", async()=>{
    try {
        return await serviceSoup.getSoup()
    } catch (error) {
        console.log(error)
    }
})
