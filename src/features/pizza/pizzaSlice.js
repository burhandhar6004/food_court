import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import servicePizza from "./pizzaService";
import axios from "axios";


const pizzaSlice = createSlice({
  name: "burhan",
  initialState: {
    pizzas: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
  },
  reducers: {},

  extraReducers : (builder)=>{
    builder.addCase(fetchPizzas.pending, (state,action)=>{
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    }).addCase(fetchPizzas.fulfilled, (state,action)=>{
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.pizzas = action.payload;
    }).addCase(fetchPizzas.rejected, (state,action)=>{
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    })
  }

});

export default pizzaSlice.reducer;


// export const fecthPratha = createAsyncThunk("FETCH/PRATHA", async() => {
//   const response = await fetch("/app/paratha")
//   const data = await response.json();
//   console.log(data)
//   return response;
// });

export const fetchPizzas = createAsyncThunk("FETCH/PIZZAS", async()=>{
    try {
      const respone = await axios.get("https://foodapi-iu1v.onrender.com/app/pizzza")
      return respone.data

    } catch (error) {
        console.log(error)
    }
})
