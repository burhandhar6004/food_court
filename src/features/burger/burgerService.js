import axios from "axios";

// const API = "/app/"

const getBurger = async () => {
  const respone = await axios.get("/app/burger")
//   
  return respone.data
};

// const getPartaha = async () => {
//   const respone = await fetch("/app/paratha");
//   const data = await respone.json();
//   console.log(data)
// };

const serviceBurger = {
    getBurger
};

export default serviceBurger;
