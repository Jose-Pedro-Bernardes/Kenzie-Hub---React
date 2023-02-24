import { toast } from "react-toastify";

export function verifyToast(verifier, text) {
  if (verifier === "success") {
    const notifySuccess = toast.success(`${text}`, {
      position: "top-right",
      autoClose: 700,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    return notifySuccess;
  } else if (verifier === "error") {
    const notifyErr = toast.error("Ops! Algo deu errado.", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    return notifyErr;
  }
}
