import React, { useEffect } from "react";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { addItem } from "../features/AddToCard/MenuCardSlice";

const CardItems = ({ paratha }) => {
  const dispatch = useDispatch();

  const handleSubmit = (card) => {
    dispatch(addItem(card));
  };

  return (
    <>
      <div className="carts-1 px-5 pb-5 flex flex-col mt-4 items-center justify-center">
        <img
          className="cart-item-img rounded-2xl border mt-5"
          src={paratha?.img}
        />
        <div class="px-5 pb-5">
          <div className="mt-4">
            <Stack spacing={1}>
              <Rating name="size-medium" defaultValue={2} />
            </Stack>
          </div>
          <a href="#">
            <h5 class="cart-item-text text-center font-semibold tracking-tight dark:text-white text-orange-600 mt-3">
              {paratha?.name}
            </h5>
          </a>
          <div class="flex items-center justify-around mt-3">
            <span class="text-2xl font-bold text-gray-900 dark:text-white card-item-price">
              $ {paratha?.price}
            </span>

            <div class="btns">
              <button
                onClick={() => handleSubmit(paratha)}
                class="btn circle border "
              >
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

export default CardItems;
