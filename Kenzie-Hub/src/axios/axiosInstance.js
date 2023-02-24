import axios from "axios";

const token = localStorage.getItem("@KenzieHub:token");

export const axiosInstance = axios.create({
  baseURL: "https://kenziehub.herokuapp.com/",
  headers: {
    "Content-Type": "application/json",
    Autorization: `Bearer ${token}`,
  },
  timeout: 10000,
});
