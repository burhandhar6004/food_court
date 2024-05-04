import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import serviceDesert from "./desertService";


const desertSlice = createSlice({
  name: "desert",
  initialState: {
    deserts: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
  },
  reducers: {},

  extraReducers : (builder)=>{
    builder.addCase(fetchDesert.pending, (state,action)=>{
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    }).addCase(fetchDesert.fulfilled, (state,action)=>{
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.deserts = action.payload;
    }).addCase(fetchDesert.rejected, (state,action)=>{
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    })
  }

});

export default desertSlice.reducer;


// export const fecthPratha = createAsyncThunk("FETCH/PRATHA", async() => {
//   const response = await fetch("/app/paratha")
//   const data = await response.json();
//   console.log(data)
//   return response;
// });

export const fetchDesert = createAsyncThunk("FETCH/DESERT", async()=>{
    try {
        return await serviceDesert.getDesert()
    } catch (error) {
        console.log(error)
    }
})
