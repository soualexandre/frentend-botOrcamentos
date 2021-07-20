import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: -10rem;

  div {
    width: 100%;
    background: var(--shape);
    padding: 1.5rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    &.highlightBackground {
      background: #33cc95;
      color: #fff;
    }
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      line-height: 3rem;
      font-weight: 500;
      &.withdraw {
        color: red;
      }
    }
  }
`;
