import axios from "axios";
import { URL_API_INCEPTIA } from "./constants";

const inceptiaApi = axios.create({
  baseURL: URL_API_INCEPTIA
})


inceptiaApi.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token'); 
      if (token) {
        config.headers['Authorization'] = `JWT ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  

export default inceptiaApi