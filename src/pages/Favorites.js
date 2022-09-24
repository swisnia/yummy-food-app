import React from 'react'
import { useAppContext } from '../context/appContext'

export const Favorites = () => {
  const {favorites} = useAppContext()
  return (
    <div>
      {favorites.list.length > 0 && favorites.list.map(e => {
        return(
          <h5
            key={e}          
          >{e}</h5>
        )
      })}
    </div>
  )
}
