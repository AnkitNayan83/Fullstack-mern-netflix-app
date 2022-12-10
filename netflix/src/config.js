import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://rich-pink-newt-wrap.cyclic.app/api/",
});
