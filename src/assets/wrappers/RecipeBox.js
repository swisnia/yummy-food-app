import styled from "styled-components";

const Wrapper = styled.section`
    padding: 1rem 1rem;
    border: 1px solid var(--secondary-200);
    width: 100%;
    max-width: 30rem;
    border-radius: var(--boxRadius);
    .dish-img{
        width: 100%;
        max-height: 20rem;
        object-fit: cover;
        border-radius: var(--boxRadius);
    }
    h5{
        white-space: nowrap;
        max-width: 30rem;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .title-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.5rem;
    }
    .heart-icon{
        min-height: 1.75rem;
        min-width: 1.75rem;
    }
    .heart-icon:hover{
        cursor: pointer;
    }
`

export default Wrapper