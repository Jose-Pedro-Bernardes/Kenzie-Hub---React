import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 48.75rem;
  height: 4.5rem;
  max-width: 95%;

  margin-top: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    width: 4.188rem;
    height: 2.507rem;

    font-size: var(--text-body);
    font-weight: 600;

    background-color: var(--grey-3);
    color: var(--grey-0);

    border-radius: 4px;
    border: none;

    cursor: pointer;
    transition: 0.5s;

    @media (min-width: 1100px) {
      color: var(--grey-1);
      :hover {
        background-color: var(--grey-2);
        transform: scale(1.02);
        color: var(--grey-0);
      }
    }
  }
`;
