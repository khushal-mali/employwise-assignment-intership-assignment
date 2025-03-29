import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://reqres.in/api",
  // withCredentials: true, // send cookies to the server
});

export default axiosInstance;
