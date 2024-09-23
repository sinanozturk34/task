// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.SCHIPOL_API_KEY;
const API_ID = process.env.SCHIPOL_API_ID;

const SCHIPHOL_API_URL = "https://api.schiphol.nl";
const axiosInstance = axios.create({
  baseURL: SCHIPHOL_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    app_id: `${API_ID}`,
    app_key: `${API_KEY}`,
    ResourceVersion: "v4",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
