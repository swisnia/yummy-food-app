import React, { useEffect, useState } from 'react'
import Wrapper from '../assets/wrappers/RecipeDetails'
import { useAppContext } from '../context/appContext'
import {BiSquareRounded} from 'react-icons/bi'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import { useSearchParams } from "react-router-dom";

const RecipeDetails = () => {
    const [comment, setComment] = useState()
    const {recipeDetails, addToFavorites, favorites, getRecipeDetails, addComment, comments} = useAppContext()
    const [searchParams] = useSearchParams()

    const handleChange = (e) => {
        const newComment = e.target.value
        setComment(newComment) 
    }
    const handleFavorites = () => {
        const recipeId = recipeDetails.id
        addToFavorites(recipeId)
    }
    const handleAddComment = () => {
        const recipeId = recipeDetails.id
        const newComment = {
            recipeId: recipeId,
            comment: comment
        }
        addComment(newComment)
    }
    const checkComments = (id) => {
        const index = comments.list.findIndex((obj => obj.recipeId === parseInt(id)))

        if (index !== -1) {
            const commentText = comments.list[index].comment
            setComment(commentText)
        }
    }
    useEffect(() => {
        const id = searchParams.get("id")
        getRecipeDetails(id)
        checkComments(id)
        // eslint-disable-next-line
    },[])
    
  return (
    <Wrapper>
        <div className='img-and-ingredients-container'>
            <div>
                <span className='title-container'>
                    <h4>{recipeDetails.title}</h4>
                    {favorites.list.includes(recipeDetails.id)
                        ?<AiFillHeart className='filled' onClick={handleFavorites}/> 
                        :<AiOutlineHeart onClick={handleFavorites}/>}
                </span>
                <img 
                    src={recipeDetails.image}
                    alt='not found'
                />
            </div>
            <div className='recipe-info-container'>
                <h4>Ingredients: </h4>
                <ul>
                    {recipeDetails.extendedIngredients && recipeDetails.extendedIngredients.map((e,index) => {
                        return (
                            <li key={`ingredient${index}`} className='ingredients-container'>
                                <BiSquareRounded /><h5> {e.original}</h5>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div>
                <h4>Instructions: </h4>
                <ul>
                    {recipeDetails.analyzedInstructions && recipeDetails.analyzedInstructions[0].steps.map(e => {
                        return(
                            <li key={e.number} className='ingredients-container'>
                                <BiSquareRounded /><h5> {e.step}</h5>
                            </li>
                        )
                    })}
                </ul>                                        
            </div>
            <div className='comment-container'>
                <h4>Comments:</h4>
                <textarea
                    className='comment'
                    value={comment}
                    onChange={handleChange}
                ></textarea>
                <button
                    type='button'
                    className='btn btn-block'
                    onClick={handleAddComment}
                >
                    Save comment
                </button>
            </div>
        </div>
    </Wrapper>
  )
}

export default RecipeDetails