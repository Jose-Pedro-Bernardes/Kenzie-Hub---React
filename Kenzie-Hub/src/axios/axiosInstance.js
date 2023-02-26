import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://kenziehub.herokuapp.com/",
  headers: {
    "Content-Type": "application/json",
    Autorization: `Bearer ${token}`,
  },
  timeout: 10000,
});
