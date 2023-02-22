import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  gap: 30px;

  figure {
    align-self: center;
    max-width: 100%;
  }

  main {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
