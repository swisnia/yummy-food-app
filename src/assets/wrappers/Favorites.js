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
`

export default Wrapper