import axios from "axios";

export const getDetails = () => {
  return axios.get(`https://dummyjson.com/products`);
};
