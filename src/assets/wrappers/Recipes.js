import styled from "styled-components";

const Wrapper = styled.section`
    .recipes-container{
        padding: 0 2rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /*if column smaller than 320px makes oly 1 column*/
        column-gap: 1rem;
        row-gap: 1rem;
    }
    h4{
        padding-left: 2rem;
    }
    .btn-scroll-up{
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        height: 3rem;
        width: 3rem;
        border: none;
        border-radius: calc(50%);
        background-color: var(--primary-500);
    }
    .btn-scroll-up:hover{
        cursor: pointer;
    }
    .btn-scroll-up svg{
        min-height: 1rem;
        min-width: 1rem;
    }
`

export default Wrapper