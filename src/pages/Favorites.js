import React, { useEffect } from 'react'
import { useAppContext } from '../context/appContext'
import { RecipeBox } from '../components'
import Wrapper from '../assets/wrappers/Favorites'

export const Favorites = () => {
  const {favorites, getFavoritesRecipes, favoritesRecipes} = useAppContext()

  useEffect(() => {
    getFavoritesRecipes()
    // eslint-disable-next-line
  }, [favorites])

  return (
    <Wrapper>
      <h4>Favorites: </h4>
      <div className='recipes-container'>
          {favoritesRecipes.length > 0 && favoritesRecipes.map(e => {
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
