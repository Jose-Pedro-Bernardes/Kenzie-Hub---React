import styled from "styled-components";

export const Form = styled.form`
  width: 23.063rem;

  max-width: 90%;
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

  .labelAlign {
    width: 20.375rem;
    max-width: 92%;
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 20px;

    span {
      align-self: flex-end;
      color: #e83f5b;
      margin-right: 3px;
      margin-top: 10px;
      font-size: 11px;
    }

    label {
      align-self: flex-start;
      color: var(--grey-0);
      margin-left: 3px;
      margin-bottom: 22px;
    }

    input {
      width: 19.1rem;
      height: 3rem;
      max-width: 92%;
      padding-left: 1rem;
      border: none;
      border-radius: 4px;
      background-color: var(--grey-2);
      outline-color: var(--grey-0);
      color: var(--grey-0);
    }
  }
  button {
    margin-bottom: 24px;
    max-width: 90%;
  }
  p {
    margin-bottom: 22px;
    font-size: var(--text-body);
    font-weight: 600;
    color: var(--grey-1);
  }

  a {
    width: 20rem;
    height: 3rem;
    max-width: 90%;
    margin-bottom: 24px;

    background-color: var(--grey-1);
    text-decoration: none;

    color: var(--grey-0);
    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: 1s;
  }

  @media (min-width: 400px) {
    a {
      max-width: 100%;
    }
    button {
      max-width: 100%;
    }

    input {
      max-width: 100%;
    }

    .labelAlign {
      max-width: 100%;
    }
  }

  @media (min-width: 1100px) {
    a {
      background-color: var(--grey-2);
    }
    a:hover {
      background-color: var(--grey-1);
    }
  }
`;
