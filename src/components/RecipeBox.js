import React from 'react'
import Wrapper from '../assets/wrappers/RecipeBox'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import { useAppContext } from '../context/appContext'
import { useNavigate } from "react-router-dom";

const RecipeBox = ({id, title, img}) => {
    const {addToFavorites, favorites} = useAppContext()
    const navigate = useNavigate()

    const handleShowMore = (e) => {
        const id = e.target.parentElement.id
        //getRecipeDetails(id)
        navigate(`/recipe-details?id=${id}`)
    }
    const handleFavorites = (e) => {
        let recipeId = e.target.parentElement.parentElement.id
        if(!recipeId) recipeId = e.target.parentElement.parentElement.parentElement.id
        addToFavorites(recipeId)
    }
  return (
    <Wrapper id={id}>
        <div className='title-container'> 
            <h5>{title}</h5>
            {favorites.list.includes(id)
                ?<AiFillHeart className='heart-icon filled' onClick={handleFavorites}/> 
                :<AiOutlineHeart className='heart-icon' onClick={handleFavorites}/>}
        </div>
        <img 
            src={img}
            alt='Something went wrong'
            className='dish-img'
        />
        <button
            type='button'
            className='btn btn-ghost'
            onClick={handleShowMore}
        >
            Show more
        </button>
    </Wrapper>
  )
}

export default RecipeBox