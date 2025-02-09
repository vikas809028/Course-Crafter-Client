import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.APP_BASE_URL,
  withCredentials: true,
});

export default axiosInstance;
