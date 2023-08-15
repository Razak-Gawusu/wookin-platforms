import axios from "axios";

export const instance = axios.create({
  baseURL: "https://ownkey-real-estate-main-3113cd8.d2.zuplo.dev",
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_WOOKIN_KEY}`,
  },
});
