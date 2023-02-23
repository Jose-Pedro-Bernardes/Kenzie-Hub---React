import styled from "styled-components";

export const MainButton = styled.button`
  width: 20rem;
  height: 3rem;
  max-width: 100%;

  background-color: var(--main-button-hover);
  color: var(--grey-0);

  font-weight: 500;
  font-size: var(--title-2);

  border: none;
  border-radius: 4px;
  transition: 0.7s;

  @media (min-width: 1100px) {
    cursor: pointer;

    background-color: var(--main-button-color);

    :hover {
      background-color: var(--main-button-hover);
    }
  }
`;
