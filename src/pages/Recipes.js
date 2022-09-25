import React from 'react'
import Wrapper from '../assets/wrappers/Recipes'
import { SearchBar, RecipeBox } from '../components'
import { useAppContext } from '../context/appContext'
import {AiOutlineArrowUp} from 'react-icons/ai'

const Recipes = () => {
  const {recipes} = useAppContext()

  const scrollUp = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }
  return (
    <Wrapper>
      <SearchBar />
      <h4>Results: </h4>
      <div className='recipes-container'>
        {recipes && recipes.map(e => {
          return(
            <RecipeBox 
              key={e.id}
              id={e.id}
              title={e.title}
              img={e.image}
            />
          )
        })}
        <button
          type='button'
          className='btn-scroll-up'
          onClick={scrollUp}
        >
          <AiOutlineArrowUp />
        </button>
      </div>
    </Wrapper>
  )
}

export default Recipes