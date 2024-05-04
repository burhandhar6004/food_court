import React, { useEffect } from "react";
import Paratha from "../Pages/Paratha";
import Burger from "../Pages/Burger";
import Pizza from "../Pages/Pizza";
import Desert from "../Pages/Desert";
import Soup from "../Pages/Soup";
import Beverage from "../Pages/Beverage";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchParatha } from "../features/paratha/parathaSlice";
import { fetchBurger } from "../features/burger/burgerSlice";
import { fetchPizzas } from "../features/pizza/pizzaSlice";
import { fetchDesert } from "../features/desert/desertSlice";
import { fetchSoup } from "../features/soup/soupSlice";
import { fetchBever } from "../features/beverages/bevrSlice";
import { LinearProgress, Typography } from "@mui/material";

const MainMenu = () => {
  const { parathas,isLoading } = useSelector((state) => state.parathas);
  const { burgers } = useSelector((state) => state.burgers);
  const { pizzas } = useSelector((state) => state.pizzas);
  const { deserts } = useSelector((state) => state.deserts);
  const { soups } = useSelector((state) => state.soups);
  const {beverages}  = useSelector ((state)=> state.beverages)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchParatha());
    dispatch(fetchBurger());
    dispatch(fetchPizzas());
    dispatch(fetchDesert());
    dispatch(fetchSoup());
    dispatch(fetchBever());
  }, []);

  if(isLoading){
    return (
      <Typography variant="h3" sx={{ textAlign: "center", m: 14 }}>
        <LinearProgress color="inherit" />
      </Typography>
    )
  }
    
  

  return (
    <>
      <div className="Paratha">
        <h3 class="mb-4  text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl dark:text-white mt-20 ml-10">
          {" "}
          <mark class="px-2 text-center text-white bg-orange-600 rounded dark:bg-green-500">
            Paratha
          </mark>
        </h3>{" "}
        <br />
        <div className="card-items">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center ">
            {parathas?.map((paratha) => (
              <Paratha key={paratha._id} paratha={paratha} />
            ))}
          </div>
        </div>
      </div>

      <div className="Burger">
        <h3 class="mb-4  text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl dark:text-white mt-20 ml-10">
          {" "}
          <mark class="px-2 text-white bg-orange-600 rounded dark:bg-green-500">
            Burger
          </mark>
        </h3>{" "}
        <br />
        <div className="card-items">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center ">
            {burgers?.map((burger) => (
              <Burger key={burger._id} burger={burger} />
            ))}
          </div>
        </div>
      </div>

      <div className="pizza">
        <h3 class="mb-4  text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl dark:text-white mt-20 ml-10">
          {" "}
          <mark class="px-2 text-white bg-orange-600 rounded dark:bg-green-500">
            Pizza
          </mark>
        </h3>{" "}
        <br />
        <div className="card-items">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
            {pizzas?.map((pizza) => (
              <Pizza key={pizza._id} pizza={pizza} />
            ))}
          </div>
        </div>
      </div>

      <div className="Desert">
        <h3 class="mb-4  text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl dark:text-white mt-20 ml-10">
          {" "}
          <mark class="px-2 text-white bg-orange-600 rounded dark:bg-green-500">
            Desert
          </mark>
        </h3>{" "}
        <br />
        <div className="card-items">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
            {deserts?.map((desert) => (
              <Desert key={desert._id} desert={desert} />
            ))}
          </div>
        </div>
      </div>

      <div className="Soup">
        <h3 class="mb-4  text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl dark:text-white mt-20 ml-10">
          {" "}
          <mark class="px-2 text-white bg-orange-600 rounded dark:bg-green-500">
            Soup
          </mark>
        </h3>{" "}
        <br />
        <div className="card-items">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
            {soups?.map((soup) => (
              <Soup key={soup._id} soup={soup} />
            ))}
          </div>
        </div>
      </div>

      <div className="Bevrage">
        <h3 class="mb-4  text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl dark:text-white mt-20 ml-10">
          {" "}
          <mark class="px-2 text-white bg-orange-600 rounded dark:bg-green-500">
            Beverage
          </mark>
        </h3>{" "}
        <br />
        <div className="card-items">
          <div  class="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
            {
              beverages?.map(beverage => <Beverage key={beverage._id} beverage={beverage} />)
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default MainMenu;
