import styled from "styled-components";

const Wrapper = styled.section`
    padding: 2rem;
    .recipe-info-container{
        display: flex;
        flex-direction: column;
    }
    .img-and-ingredients-container{
        display: grid;
    }
    img{
        width: 100%;
        object-fit: cover;
        border-radius: var(--boxRadius);
    }
    .ingredients-container{
        display: flex;
        align-items: flex-start;
    }
    .ingredients-container svg{
        margin-right: 1rem;
        min-height: 1.25rem;
        min-width: 1.25rem;
    }
    .title-container{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }
    .title-container svg {
        min-height: 2rem;
        min-width: 2rem;
    }
    .title-container svg:hover{
        cursor: pointer;
    }
    .comment{
        width: 100%;
        height: 5rem;
        resize: none;
        padding: 0.5rem;
        border-radius: var(--boxRadius);
    }
    @media (min-width: 900px) {
        .img-and-ingredients-container{
            grid-template-columns: 1fr 1fr;
            column-gap: 2rem;
        }
    }
`

export default Wrapper