import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://vercel-host-omega.vercel.app/api/",
});
