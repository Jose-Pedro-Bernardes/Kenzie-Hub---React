import styled from "styled-components";

export const Form = styled.form`
  width: 23.063rem;
  height: 30rem;
  max-width: 100%;
  padding: 42px 0 20px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--grey-3);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

  border-radius: 4px;

  .title1 {
    font-size: var(--title-1);
    font-weight: 700;
    color: var(--grey-0);
    margin-bottom: 26px;

    width: 100%;

    display: flex;
    justify-content: center;
  }

  .labeAlign {
    width: 20.375rem;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;
    margin-bottom: 20px;

    label {
      align-self: flex-start;
      color: var(--grey-0);
      margin-left: 3px;
    }

    input {
      width: 19.1rem;
      height: 3rem;
      max-width: 100%;
      padding-left: 1rem;
      border: none;
      border-radius: 4px;
      background-color: var(--grey-2);
      outline-color: var(--grey-0);
    }
  }
  button {
    margin: 24px 0;
  }
  p {
    margin-bottom: 22px;
    font-size: var(--text-body);
    font-weight: 600;
    color: var(--grey-1);
  }

  a {
    width: 20.375rem;
    height: 3rem;
    max-width: 100%;

    background-color: var(--grey-1);
    text-decoration: none;

    color: var(--grey-0);
    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
