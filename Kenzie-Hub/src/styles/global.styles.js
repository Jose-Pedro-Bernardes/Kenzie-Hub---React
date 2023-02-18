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

*{
	font-family: "Inter", sans-serif;
}
`;
