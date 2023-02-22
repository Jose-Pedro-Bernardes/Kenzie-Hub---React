import styled from "styled-components";

export const Form = styled.form`
  width: 23.063rem;
  min-height: 29rem;
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
    margin-bottom: 22px;

    width: 100%;

    display: flex;
    justify-content: center;
  }

  .descriptionTop {
    font-size: var(--text-body);
    color: var(--grey-1);
    margin-bottom: 28px;
  }
  .labeAlign {
    width: 20.375rem;
    max-width: 92%;
    display: flex;
    align-items: flex-start;
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
      max-width: 92%;
      padding-left: 1rem;
      border: none;
      border-radius: 4px;
      background-color: var(--grey-2);
      outline-color: var(--grey-0);
      color: var(--grey-0);
    }
    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      -ms-appearance: none;
      appearance: none;
      outline: 1px;
      box-shadow: none;
      cursor: pointer;
      flex: 1;
      background-image: none;
      width: 20.1rem;
      height: 3.5rem;
      max-width: 100%;
      padding-left: 1rem;
      border: none;
      border-radius: 4px;
      background-color: var(--grey-2);
      outline-color: var(--grey-0);
      color: var(--grey-0);
    }
    select::-ms-expand {
      display: none;
    }
    .select {
      position: relative;
      display: flex;
      width: 20em;

      line-height: 3;
      background: #5c6664;
      overflow: hidden;
      border-radius: 0.25em;
      max-width: 100%;

      select {
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        appearance: none;
        outline: 1px;
        box-shadow: none;
        cursor: pointer;
        flex: 1;
        background-image: none;
        width: 20.1rem;
        height: 3.5rem;
        max-width: 100%;
        padding-left: 1rem;
        border: none;
        border-radius: 4px;
        background-color: var(--grey-2);
        outline-color: var(--grey-0);
        color: var(--grey-0);
        font-size: var(--title-3);
      }
      select::-ms-expand {
        display: none;
      }
    }
    .select::after {
      content: "↓";
      position: absolute;
      top: 0;
      right: 0;
      padding: 5px 16px;
      background: var(--second-black);
      cursor: pointer;
      pointer-events: none;
      transition: 0.25s all ease;
      color: var(--grey-1);
      height: 100%;
      max-width: 100%;
    }
    .select:hover::after {
      color: var(--grey-0);
    }
  }

  button {
    margin: 24px 0;
    max-width: 90%;
  }
`;
