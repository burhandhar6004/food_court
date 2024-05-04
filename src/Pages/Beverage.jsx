import React, { useEffect, useState } from "react";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import { Rating, Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { addItem } from "../features/AddToCard/MenuCardSlice";

const Beverage = ( {beverage}) => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const getPartaha = async () => {
  //     const response = await fetch('/app/paratha');
  //     const data = await response.json();
  //     console.log(data);
  //   };

  //   getPartaha();
  // });

  const dispatch = useDispatch();

  const handleSubmit = (card) => {
    dispatch(addItem(card));
  };

  return (
    <>
     
          
            <div className="carts-1 px-5 pb-5 flex flex-col mt-4 items-center justify-center">
              <img
                className="cart-item-img rounded-2xl border mt-5"
                src={beverage.img}
              />
              <div class="px-5 pb-5">
                <div className="mt-4">
                  <Stack spacing={1}>
                    <Rating name="size-medium" defaultValue={2} />
                  </Stack>
                </div>
                <a href="#">
                  <h5 class="cart-item-text text-center font-semibold tracking-tight dark:text-white text-orange-600 mt-3">
                    {beverage.name}
                  </h5>
                </a>
                <div class="flex items-center justify-around mt-3">
                  <span class="text-2xl font-bold text-gray-900 dark:text-white card-item-price">
                    ${beverage.price}
                  </span>

                  <div class="btns">
                    <button class="btn circle border " onClick={() => handleSubmit(beverage)}  >
                      <a href="#" className="font-medium text-2xl">
                        <AddShoppingCartRoundedIcon />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
         
        
    </>
  );
};

export default Beverage;
