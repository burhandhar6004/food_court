import React from "react";

const UserReview = () => {
  return (
    <>
      {/* <div className="user-review">
      <div class="grid grid-cols-2 md:grid-cols-2 gap-4 user ">


      <figure class="max-w-screen-md mx-auto text-center user-2">
          <svg
            class="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600 mt-16"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>

          <blockquote>
            <p class="text-2xl italic font-medium text-gray-900 dark:text-white text-center mt-10">
              "Flowbite is just awesome. It contains tons of predesigned
              components and pages starting from login screen to complex
              dashboard. Perfect choice for your next SaaS application."
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center mt-10 space-x-3 rtl:space-x-reverse">
            <img
              class="w-6 h-6 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
              alt="profile picture"
            />
            <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
              <cite class="pe-3 font-medium text-gray-900 dark:text-white">
                Michael Gough
              </cite>
              <cite class="ps-3 text-sm text-gray-500 dark:text-gray-400">
                CEO at Google
              </cite>
            </div>
          </figcaption>
        </figure>
        

      <figure class="max-w-screen-md mx-auto text-center user-2 ">
          <svg
            class="w-10 h-10 mx-auto mb-3 mt-16 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>

          
          <blockquote>
            <p class="text-2xl italic text-center font-medium text-gray-900 dark:text-white mt-10">
              "Flowbite is just awesome. It contains tons of predesigned
              components and pages starting from login screen to complex
              dashboard. Perfect choice for your next SaaS application."
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center mt-10 space-x-3 rtl:space-x-reverse">
            <img
              class="w-6 h-6 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
              alt="profile picture"
            />
            <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
              <cite class="pe-3 font-medium text-gray-900 dark:text-white">
                Michael Gough
              </cite>
              <cite class="ps-3 text-sm text-gray-500 dark:text-gray-400">
                CEO at Google
              </cite>
            </div>
          </figcaption>
        </figure>
      </div>
      </div> */}

      <div class="bg-white font-[sans-serif] mt-10">
      <div class="max-w-7xl mx-auto">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-[#333] inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-pink-400 after:rounded-full">LATEST BLOGS</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-md:max-w-lg mx-auto">
          <div class="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
            <img src="https://img.freepik.com/free-photo/grilled-gourmet-burger-with-cheese-tomato-onion-french-fries-generated-by-artificial-intelligence_25030-63181.jpg" alt="Blog Post 1" class="w-full h-96 object-cover" />
            <div class="p-6 absolute bottom-0 left-0 right-0 bg-white opacity-90">
              <span class="text-sm block text-gray-600 mb-2">10 FEB 1954 | BY JOHN DOE</span>
              <h3 class="text-xl font-bold text-[#333]">Second largest fast food hamburger </h3>
              <div class="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                <p class="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
              </div>
            </div>
          </div>
          <div class="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
            <img src="https://t3.ftcdn.net/jpg/05/60/70/82/360_F_560708240_pMZPOuSfvblWGRoaiZFLT4wiFTzQPwQe.jpg" alt="Blog Post 2" class="w-full h-96 object-cover" />
            <div class="p-6 absolute bottom-0 left-0 right-0 bg-white opacity-90">
              <span class="text-sm block text-gray-600 mb-2">7 JUN 1958 | BY MARK ADAIR</span>
              <h3 class="text-xl font-bold text-[#333]">American restaurant </h3>
              <div class="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                <p class="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
              </div>
            </div>
          </div>
          <div class="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
            <img src="https://www.shutterstock.com/image-photo/latte-americano-orange-juice-lime-600nw-2122885682.jpg" alt="Blog Post 3" class="w-full h-96 object-cover" />
            <div class="p-6 absolute bottom-0 left-0 right-0 bg-white opacity-90">
              <span class="text-sm block text-gray-600 mb-2">5 OCT 2023 | BY SIMON KONECKI</span>
              <h3 class="text-xl font-bold text-[#333]">Trends and Predictions</h3>
              <div class="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                <p class="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default UserReview;
