import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import serviceBurger from "./burgerService";
import axios from "axios";


const burgerSlice = createSlice({
  name: "burhan",
  initialState: {
    burgers: [],
    paratha: {},
    isLoading: false,
    isSuccess: false,
    isError: false,
  },
  reducers: {},

  extraReducers : (builder)=>{
    builder.addCase(fetchBurger.pending, (state,action)=>{
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    }).addCase(fetchBurger.fulfilled, (state,action)=>{
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.burgers = action.payload;
    }).addCase(fetchBurger.rejected, (state,action)=>{
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    })
  }

});

export default burgerSlice.reducer;


// export const fecthPratha = createAsyncThunk("FETCH/PRATHA", async() => {
//   const response = await fetch("/app/paratha")
//   const data = await response.json();
//   console.log(data)
//   return response;
// });

export const fetchBurger = createAsyncThunk("FETCH/BURGER", async()=>{
    try {
      const respone = await axios.get("https://foodapi-iu1v.onrender.com/app/burger")
      return respone.data
    } catch (error) {
        console.log(error)
    }
})
