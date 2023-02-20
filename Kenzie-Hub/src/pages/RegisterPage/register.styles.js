import styled from "styled-components";

export const Container = styled.div`
  font-family: "Inter", sans-serif;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 40px;

  gap: 30px;

  section {
    width: 23.063rem;
    max-width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      display: flex;
      justify-content: center;
      align-items: center;

      text-decoration: none;
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
        :hover {
          background-color: var(--grey-2);
        }
      }
    }
  }
`;
