import styled from "styled-components";

export const ContainerOverflow = styled.div`
  width: 48.75rem;
  height: 26rem;
  max-width: 95%;

  overflow-y: auto;
  overflow-x: hidden;

  background-color: var(--grey-3);
  border-radius: 4px;

  .list__align {
    width: 48.75rem;
    max-width: 95%;
    display: flex;
    justify-content: center;
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 95%;
    }
  }
`;
