import { createSlice } from "@reduxjs/toolkit";

const MenuCardSlice = createSlice({
  name: "cards",
  initialState: {
    cardsItem: [],
    cardTotalAmount: 0,
  },

  reducers: {
    // addItem: (state, action) => {
    //     return{
    //         ...state,
    //         cardsItem:[...state.cardsItem, action.payload],
    //     }
    //     },
      // const itemIndex = state.cardsItem.findIndex(
      //   (item) => item.id === action.payload.id
      // );
      // if (itemIndex >= 0) {
      //   state.cardsItem[itemIndex].qty += 1;
      // } else {
      //   const tempProduct = { ...action.payload, qty: 1 };
      //   state.cardsItem.push(tempProduct);
      // }},

    addItem: (state, action) => {
        const existing = state.cardsItem.find(
          (item) => item._id === action.payload._id
        );
        if (existing) {
          console.log("in exist");
          state.cardsItem = state.cardsItem.map((item) =>
            item._id === action.payload._id
              ? { ...item, qty: parseInt(item.qty)  + 1 }
              : { ...item, qty: parseInt(item.qty) }
          );
        } else {
          console.log("in new");
          return {
            ...state,
            cardsItem: [action.payload, ...state.cardsItem],
          };
        }},
   

    // INCREASE
    increase: (state, action) => {
      // console.log(action.payload);
      state.cardsItem = state.cardsItem.map((item) =>
        item._id === action.payload._id
          ? { ...item, qty: parseInt(item.qty) + 1 }
          : { ...item, qty: item.qty }
      );

      // console.log(action.payload);
    },

    // DECREASE
    decrease: (state, action) => {
      // console.log(action.payload);
      state.cardsItem = state.cardsItem.map((item) =>
        item._id === action.payload._id
          ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 }
          : { ...item, qty: item.qty }
      );
    },

    // DELeTE LIST

    remove: (state, action) => {
      return {
        ...state,
        cardsItem: state.cardsItem.filter((item) => item._id !== action.payload),
      };
    },
  },
});

export const { addItem, remove, decrease, increase } = MenuCardSlice.actions;

export default MenuCardSlice.reducer;
