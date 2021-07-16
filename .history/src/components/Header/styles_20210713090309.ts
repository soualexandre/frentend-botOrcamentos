import styled from 'styled-components'

export const Container = styled.header`
    background: var(--blue);

`;
export const Content = styled.header`
    background: var(--blue);
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1rem 12rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    button{
        font-size: 1rem;
        color: #fff;
        background: var(--blue-light);
        border: 0;
        padding:0.2rem;
        padding-left: 1rem;
        padding-right: 1rem;
        height: 3rem;


        transition: 0.2s;
        &:hover{
            filter: opacity(0.9);
        }

    }
`;