import React from 'react'
import Wrapper from '../assets/wrappers/Landing'
import { SearchBar } from '../components'

const Landing = () => {
  return (
    <Wrapper>
      <header>
        <h2>Find easy recipe</h2>
        <h5>and enjoy yummy meal.</h5>
      </header>
      <SearchBar />
    </Wrapper>
  )
}

export default Landing