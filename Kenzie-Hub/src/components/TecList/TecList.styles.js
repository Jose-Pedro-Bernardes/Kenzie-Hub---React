import styled from "styled-components";

export const ContainerOverflow = styled.div`
  width: 48.75rem;
  height: 26rem;
  max-width: 95%;
  position: relative;

  overflow-y: auto;
  overflow-x: hidden;

  background-color: var(--grey-3);
  border-radius: 4px;

  ::-webkit-scrollbar {
    background-color: var(--grey-1);
    border-radius: 0 4px 4px 0;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #1b1e21;
    border-radius: 0 1px 1px 0;
    :hover {
      background-color: #1d2024;
    }
  }

  .list__align {
    width: 48.75rem;
    max-width: 92%;
    display: flex;
    margin: 20px auto;
    justify-content: center;
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      gap: 16px;
      .noTecnology {
        width: 100%;
        height: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;

        h2 {
          font-size: 25px;
          font-weight: 700;
          color: var(--grey-1);
        }
      }
      .tecnology {
        width: 100%;
        height: 49px;

        display: flex;
        justify-content: center;

        background-color: var(--grey-4);
        border-radius: 4px;
        transition: 1s;
        :hover {
          transform: scale(1.03);
          background-color: var(--grey-2);
        }
        button {
          width: 100%;
          height: 100%;

          display: flex;
          justify-content: center;

          background-color: transparent;
          border: none;
          cursor: pointer;

          div {
            width: 92%;
            height: 100%;

            display: flex;
            justify-content: space-between;
            align-items: center;

            h3 {
              font-size: var(--title-3);
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
      }
    }
  }
`;
