import axios from "axios";
const apiURL = import.meta.env.VITE_API_URL;

//      get the stores
export const getAllStores = () => {
  return axios.get(`${apiURL}stores/getallstores`, {
    headers: {
      "Content-Type": "application/json",
    }
  });
};

//      get all stores by location
export const getStoresByLocation = (location = '') => {
  const query = location && location !== 'All' ? `?location=${location}` : '';
  return axios.get(`${apiURL}stores/getallstores${query}`, {
    headers: {
      "Content-Type": "application/json",
    }
  });
};

//      get the products
export const getAllProducts = (id) => {
  return axios.get(`${apiURL}products/getproducts/${id}`, {
    headers: {
      "Content-Type": "application/json",
    }
  });
};

