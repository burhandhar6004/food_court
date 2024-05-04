import axios from "axios";

// const API = "/app/"

const getPizza = async () => {
  const respone = await axios.get("/app/pizzza")
//   
  return respone.data
};

// const getPartaha = async () => {
//   const respone = await fetch("/app/paratha");
//   const data = await respone.json();
//   console.log(data)
// };

const servicePizza = {
    getPizza
};

export default servicePizza;
