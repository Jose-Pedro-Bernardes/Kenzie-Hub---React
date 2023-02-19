import { axiosInstance } from "./axiosInstance";

export async function loginUser(data) {
  try {
    const response = await axiosInstance.post("sessions", data);
    localStorage.setItem("@KenzieHub:token", response.data.token);

    alert("logou");
  } catch (error) {
    console.log(error);
    alert("erro");
  }
}
