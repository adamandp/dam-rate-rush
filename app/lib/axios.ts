import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://nusa-region-api.vercel.app/region",
});
