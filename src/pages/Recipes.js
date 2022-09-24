import React from 'react'
import Wrapper from '../assets/wrappers/Recipes'
import { SearchBar, RecipeBox } from '../components'
import { useAppContext } from '../context/appContext'

const Recipes = () => {
  const {recipes} = useAppContext()

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
      </div>
    </Wrapper>
  )
}

export default Recipes