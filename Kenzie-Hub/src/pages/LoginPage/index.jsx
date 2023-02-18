import React from "react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginPage() {
  document.title = "Login · Kenzie Hub";

  function verifyToast(verifier) {
    if (verifier == "sucess") {
      const notifySucess = toast.success("Login bem sucedido!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return notifySucess;
    } else if (verifier == "error") {
      const notifyErr = toast.error("Ops! Algo deu errado.", {
        position: "top-center",
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

  return (
    <>
      <div className="container">
        <button onClick={() => verifyToast("error")}>ABC</button>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="dark"
        />
      </div>
    </>
  );
}
