import React from "react";
import { Container } from "./register.styles.js";
import logo from "../../assets/logoDesk.svg";
import { Link } from "react-router-dom";
import FormRegister from "../../components/FormRegister";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../requests/axiosInstance.js";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function RegisterPage() {
  function verifyToast(verifier) {
    if (verifier == "sucess") {
      const notifySucess = toast.success("Usuário cadastrado!!", {
        position: "top-right",
        autoClose: 700,
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

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .min(3, "Seu nome deve ter ao menos 3 caractéres."),
    email: yup
      .string()
      .required("Email obrigatório.")
      .email("Esse email é inválido."),
    password: yup
      .string()
      .required("Senha obrigatória.")
      .min(8, "Sua senha deve conter ao menos 8 caractéres.")
      .matches(
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+~`\-={}[\]:;\"'<>,.?/|\\]).+$/,
        "Sua senha deve conter letras, números e símbolos."
      ),
    contact: yup.string().required("Telefone obrigatório."),
    bio: yup.string().required("Biografia obrigatória."),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas precisam ser iguais."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Cadastrar · Kenzie Hub";
  });

  async function registerUser(data) {
    try {
      const response = await axiosInstance.post("users", data);
      verifyToast("sucess");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.log(error);
      verifyToast("error");
    }
  }

  return (
    <>
      <Container>
        <section>
          <figure>
            <img src={logo} alt="Logo Kenzie Hub" />
          </figure>
          <Link to={"/"}>Voltar</Link>
        </section>
        <FormRegister
          onSubmit={handleSubmit(registerUser)}
          register={register}
          errors={errors}
        />

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
      </Container>
    </>
  );
}
