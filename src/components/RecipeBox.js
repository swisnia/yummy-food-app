import React from 'react'
import Wrapper from '../assets/wrappers/RecipeBox'
import {AiOutlineHeart} from 'react-icons/ai'
import { useAppContext } from '../context/appContext'
import { useNavigate } from "react-router-dom";

const RecipeBox = ({id, title, img}) => {
    const {getRecipeDetails, addToFavorites} = useAppContext()
    const navigate = useNavigate()

    const handleShowMore = (e) => {
        const id = e.target.parentElement.id
        getRecipeDetails(id)
        navigate('/recipe-details')
    }
    const handleFavorites = (e) => {
        const recipeId = e.target.parentElement.parentElement.id
        addToFavorites(recipeId)
    }
  return (
    <Wrapper id={id}>
        <div className='title-container'> 
            <h5>{title}</h5>
            <AiOutlineHeart 
                className='heart-icon'
                onClick={handleFavorites}
            />
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