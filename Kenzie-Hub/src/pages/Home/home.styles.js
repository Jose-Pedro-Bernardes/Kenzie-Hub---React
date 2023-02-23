import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  main {
    width: 100%;

    .main__header {
      width: 100%;
      height: 8.188rem;

      border: 1px solid var(--grey-3);
      border-left: none;
      border-right: none;

      display: flex;
      justify-content: center;

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
    .main__body {
      width: 100%;
      display: flex;
      justify-content: center;

      margin-top: 20px;
      margin-bottom: 20px;

      .main__body--header {
        width: 48.75rem;
        max-width: 95%;
        height: 2rem;

        display: flex;
        justify-content: space-between;
        align-items: center;

        h2 {
          font-size: var(--title-2);
          font-weight: 700;
          color: var(--grey-0);
        }
        button {
          width: 2rem;
          height: 2rem;

          background-color: var(--grey-3);
          color: var(--grey-0);

          font-size: var(--title-1);
          font-weight: 700;

          display: flex;
          justify-content: center;
          align-items: center;

          border-radius: 4px;

          transition: 0.5s;
        }
      }
    }

    @media (min-width: 800px) {
      .main__header {
        div {
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }
      }
    }

    @media (min-width: 1100px) {
      .main__body {
        .main__body--header {
          button {
            color: var(--grey-1);
            :hover {
              background-color: var(--grey-2);
              color: var(--grey-0);
              transform: scale(1.05);
            }
          }
        }
      }
    }
  }
`;
