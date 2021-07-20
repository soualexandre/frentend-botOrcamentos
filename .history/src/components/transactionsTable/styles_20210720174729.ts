import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  table {
    border-spacing: 0.5rem;
    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }
    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;

      &.first-child {
        color: var(--text-title);
      }

        img {
          width: 1.5rem;
          height: 1.5rem;
      }
    }
  
  }
 div{
  display: flex;
  justify-content:center;
  align-items: center;
  gap: 1rem;
  }

  
`;
