import styled from "styled-components";

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: 5fr 1fr;
    column-gap: 1rem;
    padding: 1rem 2rem;
    max-width: 800px;
    position: sticky;
    top: 0;
    background-color: #ffffff7c;
    border-bottom-right-radius: var(--boxRadius);
    .search-bar{
        border: 1px solid var(--secondary-600);
        border-radius: var(--boxRadius);
        padding: 0.35rem 0.75rem;
    }
`

export default Wrapper