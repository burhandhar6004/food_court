import { configureStore } from "@reduxjs/toolkit";
import parathaReducer from "./paratha/parathaSlice";
import burgerReducer from "./burger/burgerSlice";
import pizzaReducer from "./pizza/pizzaSlice";
import desertReducer from "./desert/desertSlice";
import soupReducer from "./soup/soupSlice";
import beverReducer from "./beverages/bevrSlice";
import MenuReducer from "./AddToCard/MenuCardSlice";

const store = configureStore({
  reducer: {
    parathas: parathaReducer,
    burgers: burgerReducer,
    pizzas: pizzaReducer,
    deserts: desertReducer,
    soups: soupReducer,
    beverages: beverReducer,
    cards: MenuReducer,
  },
});

export default store;
