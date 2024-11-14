import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:4000",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export default axiosInstance;
