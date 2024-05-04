import axios from "axios";

// const API = "/app/"

const getBeve = async () => {
  const respone = await axios.get("/app/bevr")
  return respone.data
};

// const getPartaha = async () => {
//   const respone = await fetch("/app/paratha");
//   const data = await respone.json();
//   console.log(data)
// };

const serviceBever = {
    getBeve
};

export default serviceBever;
