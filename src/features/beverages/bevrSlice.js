import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import serviceBever from "./bevrService";


const beveSlice = createSlice({
  name: "beverage",
  initialState: {
    beverages: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
  },
  reducers: {},

  extraReducers : (builder)=>{
    builder.addCase(fetchBever.pending, (state,action)=>{
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    }).addCase(fetchBever.fulfilled, (state,action)=>{
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.beverages = action.payload;
    }).addCase(fetchBever.rejected, (state,action)=>{
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    })
  }

});

export default beveSlice.reducer;


// export const fecthPratha = createAsyncThunk("FETCH/PRATHA", async() => {
//   const response = await fetch("/app/paratha")
//   const data = await response.json();
//   console.log(data)
//   return response;
// });

export const fetchBever = createAsyncThunk("FETCH/BEVERAGE", async()=>{
    try {
        return await serviceBever.getBeve()
    } catch (error) {
        console.log(error)
    }
})
