import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;

  .closeModal {
    border: none;
    background-color: transparent;
    position: absolute;
    top: 12px;
    right: 20px;
    color: var(--grey-0);
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 500;
    font-size: var(--title-2);
    cursor: pointer;
  }
  .container__header {
    width: 100%;
    height: 3.125rem;
    background-color: var(--grey-2);
    display: flex;
    align-items: center;
    border-radius: 4px 4px 0 0;
    margin-bottom: 24px;
    h3 {
      font-size: var(--title-3);
      font-weight: 700;
      margin-left: 13px;
      color: var(--grey-0);
    }
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .label-align {
      width: 20.375rem;
      max-width: 92%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;

      label {
        align-self: flex-start;
        color: var(--grey-0);
        margin-left: 3px;
        margin-bottom: 20px;
        font-size: var(--text-body);
        font-weight: 400;
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
          width: 19rem;
          height: 3.3rem;
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
      margin-top: 10px;
    }
  }
`;
