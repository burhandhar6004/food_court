import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import servicePizza from "./pizzaService";


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
        return await servicePizza.getPizza()
    } catch (error) {
        console.log(error)
    }
})
