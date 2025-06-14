import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://reqres.in/api",
  // withCredentials: true, // send cookies to the server
});

axiosInstance.defaults.headers.common = {
  "x-api-key": "reqres-free-v1",
};

export default axiosInstance;
