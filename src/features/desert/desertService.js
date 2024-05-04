import axios from "axios";

// const API = "/app/"

const getDesert = async () => {
  const respone = await axios.get("/app/desert")
//   
  return respone.data
};

// const getPartaha = async () => {
//   const respone = await fetch("/app/paratha");
//   const data = await respone.json();
//   console.log(data)
// };

const serviceDesert = {
    getDesert
};

export default serviceDesert;
