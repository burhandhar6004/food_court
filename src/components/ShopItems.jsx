import React from "react";

const ShopItems = () => {
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
        Check Our{" "}
        <mark class="px-2 text-white bg-orange-600 rounded dark:bg-green-500">
          Shop
        </mark>
      </h3>{" "}
      <br />
      <div className="shops">
        <div class="grid grid-cols-2 md:grid-cols-6 gap-4  ">
          <div className="ml-2">
            <img
              class=" rounded-full max-w-xs w-40 h-40 shp-itms"
              src="https://images.aws.nestle.recipes/resized/4869721167183657a26b655ebac39042_Aloo-Charchuri-TWIST-520x316_944_531.jpg"
              alt=""
            />
            <h3 className="shop-item">Paratha</h3>
          </div>

          <div>
            <img
              class="rounded-full max-w-xs w-40 h-40 shp-itms"
              src="https://cdn.pixabay.com/photo/2023/03/05/11/02/burger-7831128_1280.jpg"
              alt=""
            />
            <h3 className=" shop-item ">Burger</h3>
          </div>
          <div>
            <img
              class="rounded-full max-w-xs w-40 h-40 shp-itms"
              src="https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712016000&semt=ais"
              alt=""
            />
            <h3 className=" shop-item ">Pizza</h3>
          </div>
          <div>
            <img
              class="rounded-full max-w-xs w-40 h-40 shp-itms"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgxfRTSWy1-pX07OstiMTeWOvctifvd9FZFA&s"
              alt=""
            />
            <h3 className=" shop-item">Desert</h3>
          </div>
          <div>
            <img
              class="rounded-full max-w-xs w-40 h-40 shp-itms"
              src="https://img.freepik.com/free-photo/bowl-soup-with-piece-bread-it_1340-23200.jpg"
              alt=""
            />
            <h3 className="shop-item">Soup</h3>
          </div>
          <div>
            <img
              class="rounded-full max-w-xs w-40 h-40 shp-itms"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuRXIfTD-jFt1S1E5Ec53Xs4Bvb4aB6htWI-g7-xgytA&s"
              alt=""
            />
            <h3 className=" shop-item">Beverages</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopItems;
