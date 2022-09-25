import styled from 'styled-components'

const Wrapper = styled.nav `
    padding: 0 2rem;
    .nav-links{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .nav-txt{
        font-weight: bold;
        color: var(--secondary-600);
    }
    .nav-txt:hover{
        cursor: pointer;
    }
    svg{
        min-height: 2rem;
        min-width: 2rem;
    }
`

export default Wrapper