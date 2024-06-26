import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrease,
  increase,
  remove,
} from "../features/AddToCard/MenuCardSlice";
import { Link } from "react-router-dom";

const AddToCart = () => {
  // const { paratha } = useSelector((state) => state.parathas);
  const { cardsItem } = useSelector((state) => state.cards);
  const dispatch = useDispatch();

  // console.log(cardsItem.qty)

  const name = cardsItem.map((item) => item.qty);

  const convertInteger = parseInt(name);

  console.log(convertInteger);

  const [count, setCount] = useState(convertInteger);

  const total = cardsItem.reduce((p, c) => p + c.price * c.qty, 0);

  const shipping = 10;
  const tax = 5;
  const netTotal = total + shipping + tax;
  // INCREASE
  const handleIncrease = (card) => {
    dispatch(increase(card));
    setCount(count + 1);
  };

  // DECREASE
  const handleDecrease = (id) => {
    dispatch(decrease(id));
    setCount(count > 1 ? count - 1 : 1);
  };

  // REMOVE
  const handleDelete = (id) => {
    dispatch(remove(id));
    console.log(id);
  };

  return (
    <>
      <div class="font-[sans-serif] bg-white mt-32 my-10">
        <div class="lg:max-w-7xl max-w-xl mx-auto ">
          <h2 class="text-3xl font-extrabold text-[#333] mx-10  ">Food Cart</h2>
          <div class="grid lg:grid-cols-3 gap-8 items-start ">
            <div class="divide-y lg:col-span-2 p-5">
              {cardsItem?.map((item) => (
                <>
                  {/* <div class="flex items-start border justify-between  py-8">
                  <div class="flex gap-6">
                    <div class="h-64 bg-gray-100 p-6 rounded">
                      <img
                        src={item?.img}
                        class="w-full h-full object-contain shrink-0"
                      />
                    </div>
                    <div>
                      <p class=" text-sm font-bold text-[#333]">{item?.name}</p>
                      <p class="text-gray-400 text-xs mt-1">1 Item</p>
                      <h4 class="text-sm font-bold text-[#333] mt-4">
                        $ {item?.price}
                      </h4>
                      <div class="mt-6">
                        <button
                          type="button"
                          class="flex flex-wrap gap-2 text-xl text-[#333]"
                        >
                          <span
                            class="bg-gray-100 px-2 py-1 rounded"
                            onClick={() => handleDecrease(item)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-3.5 fill-current"
                              viewBox="0 0 124 124"
                            >
                              <path
                                d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                                data-original="#000000"
                              ></path>
                            </svg>
                          </span>
                          <span class="mx-4">{item?.qty}</span>
                          <span
                            class="bg-gray-100 px-2 py-1 rounded"
                            onClick={() => handleIncrease(item)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-3.5 fill-current"
                              viewBox="0 0 42 42"
                            >
                              <path
                                d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                                data-original="#000000"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 fill-red-500 inline cursor-pointer"
                    viewBox="0 0 24 24"
                    onClick={() => handleDelete(item?._id)}
                  >
                    <path
                      d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                      data-original="#000000"
                    ></path>
                    <path
                      d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div> */}

                  <div class="p-6 mt-4 bg-white shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)] rounded-md relative">
                    <div class="flex items-center max-sm:flex-col gap-4">
                      <div class="w-52 shrink-0">
                        <img
                          src={item?.img}
                          class="w-full h-full object-contain"
                        />
                      </div>
                      <div class="sm:border-l sm:pl-4">
                        <h3 class="text-xl font-extrabold text-[#333]">
                          {item?.name}
                        </h3>
                        <ul class="mt-4 text-sm text-[#333] space-y-2">
                          <li>{item?.description}</li>
                          <li>{item?.category}</li>

                          <li>
                            <a href={item?.img} class="text-blue-600">
                              (See more Specifications)
                            </a>
                          </li>
                        </ul>
                        <hr class="my-6" />
                        <div class="flex items-center justify-between flex-wrap gap-4">
                          <div class="flex items-center gap-4">
                            <h4 class="text-base font-bold text-[#333]">
                              Qty:
                            </h4>
                            <button
                              type="button"
                              class="bg-transparent py-2 font-semibold text-[#333]"
                              onClick={() => handleDecrease(item)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-3 fill-current"
                                viewBox="0 0 124 124"
                              >
                                <path
                                  d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                                  data-original="#000000"
                                ></path>
                              </svg>
                            </button>
                            <button
                              type="button"
                              class="bg-transparent px-4 py-2 font-semibold text-[#333] text-md shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)]"
                            >
                              {item?.qty}
                            </button>
                            <button
                              type="button"
                              class="bg-transparent py-2 font-semibold text-[#333]"
                              onClick={() => handleIncrease(item)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-3 fill-current"
                                viewBox="0 0 42 42"
                              >
                                <path
                                  d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                                  data-original="#000000"
                                ></path>
                              </svg>
                            </button>
                          </div>
                          <div class="flex items-center">
                            <h4 class="text-lg font-bold text-[#333]">
                              ${item?.price*item?.qty}.00
                            </h4>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-3 cursor-pointer shrink-0 fill-[#333] hover:fill-red-500 absolute top-3 right-3"
                              viewBox="0 0 320.591 320.591"
                              onClick={() => handleDelete(item?._id)}
                            >
                              <path
                                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                data-original="#000000"
                              ></path>
                              <path
                                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                data-original="#000000"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div class="bg-gray-100 p-8 m-5 right-7">
              <h3 class="text-2xl font-bold text-[#333]">Order summary</h3>
              <ul class="text-[#333] mt-6 divide-y">
                <li class="flex flex-wrap gap-4 text-md py-3">
                  Subtotal <span class="ml-auto font-bold">${total}</span>
                </li>
                <li class="flex flex-wrap gap-4 text-md py-3">
                  Shipping <span class="ml-auto font-bold">${shipping}</span>
                </li>
                <li class="flex flex-wrap gap-4 text-md py-3">
                  Tax <span class="ml-auto font-bold">${tax}</span>
                </li>
                <li class="flex flex-wrap gap-4 text-md py-3 font-bold">
                  Total <span class="ml-auto">${netTotal}</span>
                </li>
              </ul>
              <Link to={"/chck"}>
                <button
                  type="button"
                  class="mt-6 text-md px-6 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded"
                >
                  Check out
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCart;
