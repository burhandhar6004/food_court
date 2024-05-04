import axios from "axios";

// const API = "/app/"

const getSoup = async () => {
  const respone = await axios.get("/app/soup")
//   
  return respone.data
};

// const getPartaha = async () => {
//   const respone = await fetch("/app/paratha");
//   const data = await respone.json();
//   console.log(data)
// };

const serviceSoup = {
    getSoup
};

export default serviceSoup;
