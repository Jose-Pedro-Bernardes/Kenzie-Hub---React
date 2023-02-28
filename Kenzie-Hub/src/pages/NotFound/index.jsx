import React, { useEffect } from "react";
import { Container } from "./notFound.styles.js";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  document.title = "Page not found · Kenzie Hub";
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Page not found · Kenzie Hub";

    setTimeout(() => {
      navigate("/");
    }, 2000);
  });
  return (
    <>
      <Container className="container">
        <h1>Pagina não encontrada.</h1>
        <p>404</p>
      </Container>
    </>
  );
}
