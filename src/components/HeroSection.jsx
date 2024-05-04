import React, { useEffect } from "react";
import CardItems from "./CardItems";
import { useDispatch, useSelector } from "react-redux";
import { fetchParatha } from "../features/paratha/parathaSlice";
import { Typography } from "@mui/material";
// import CardItems from './CardItems'

const HeroSection = () => {
  const { parathas, isLoading } = useSelector((state) => state.parathas);
  
  // const para = parathas.map((item) => item);
  // console.log(para._id)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchParatha());
  }, []);

  if (isLoading) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-10 animate-spin fill-blue-600 block mx-auto"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"
          data-original="#000000"
        />
      </svg>
    );
  }
  return (
    <>
      <div class="inline-flex items-center justify-center w-full">
        <hr class="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
          <svg
            class="w-4 h-4 text-gray-700 dark:text-gray-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
        </div>
      </div>
      <h3 class="mb-4 text-center text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl dark:text-white">
        Trendy{" "}
        <mark class="px-2 text-white bg-orange-600 rounded dark:bg-green-500">
          Recipes
        </mark>
      </h3>{" "}
      <br />
      <div className="grid grid-cols-1 gap-3 md:grid-cols-4 justify-items-center">
        {parathas.map((paratha) => (
          <CardItems key={paratha._id} paratha={paratha} />
        ))}
      </div>
    </>
  );
};

export default HeroSection;
