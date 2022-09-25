import React from 'react'
import Wrapper from '../assets/wrappers/Landing'
import { SearchBar } from '../components'

const Landing = () => {
  return (
    <Wrapper>
      <div className='search-bar-container'>
        <header>
          <h2>Find recipe</h2>
          <h5>and enjoy your yummy meal.</h5>
        </header>
        <SearchBar />
      </div>
    </Wrapper>
  )
}

export default Landing