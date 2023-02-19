import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  main {
    width: 100%;

    section {
      width: 100%;
      border: 1px solid var(--grey-3);
      border-left: none;
      border-right: none;

      display: flex;
      justify-content: center;
      height: 8.188rem;
      div {
        width: 48.75rem;
        max-width: 95%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        h1 {
          font-size: var(--title-1);
          font-weight: 700;
          color: var(--grey-0);
        }
        p {
          font-size: var(--text-body);
          font-weight: 500;
          color: var(--grey-1);
        }
      }
    }

    @media (min-width: 800px) {
      section {
        div {
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }
      }
    }
  }
`;
