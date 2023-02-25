import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  :root{
    --main-button-color: #59323F;
    --main-button-hover: #FF427F;
    --button-back-color: #212529;

    --container-color: #212529;
    --input-color: #343B41;
    --input-focus-color: #868E96;

    --tecnology-color: #343B41;

    --mainWhite: #F8F9FA;
    --main-black: rgba(18, 18, 20, 1);
    --second-black: rgba(30, 30, 30, 1);

    --grey-0: #F8F9FA;
    --grey-1: #868E96;
    --grey-2: #343B41;
    --grey-3: #212529;
    --grey-4: rgba(18, 18, 20, 1);


    --title-1: 1.125rem;
    --title-2: 1rem;
    --title-3: 0.875rem;

    --text-body: 0.75rem;
  }

body {
  background: var(--main-black);
}

.modal{
  background-color: #212529;
  width: 369px;
  max-width: 95%;
  height: 372px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border-radius: 4px;
}

.ReactModal__Overlay {
  opacity: 0;
  transition: opacity 400ms ease-in-out;
}

.ReactModal__Overlay--after-open{
  opacity: 1;
}

.ReactModal__Overlay--before-close{
  opacity: 0;
}

.modal-overlay{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(18, 18, 20, 0.5);
}

*{
	font-family: "Inter", sans-serif;
  h3{
    font-family: "Inter", sans-serif;
  }
  div{
    font-family: "Inter", sans-serif;
  }
}
`;
