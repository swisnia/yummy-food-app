import React, {useContext, useReducer} from "react"
import reducer from "./reducers";
import axios from "axios"
import {
    GET_RECIPES_BEGIN,
    GET_RECIPES_SUCCESS,
    GET_RECIPES_ERROR,
    GET_RECIPE_DETAILS_BEGIN,
    GET_RECIPE_DETAILS_SUCCESS,
    GET_RECIPE_DETAILS_ERROR,
    ADD_TO_FAVORITES_BEGIN,
    ADD_TO_FAVORITES_SUCCESS,
    ADD_TO_FAVORITES_ERROR,
    GET_FAVORITES_RECIPES_BEGIN,
    GET_FAVORITES_RECIPES_SUCCESS,
    GET_FAVORITES_RECIPES_ERROR,
    ADD_COMMENT_BEGIN,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_ERROR
} from "./actions"
const API_KEY = process.env.REACT_APP_API_KEY
const favorites = localStorage.getItem('favorites')
const comments = localStorage.getItem('comments')

const initialState = {
    recipes: [],
    recipeDetails: {},
    favorites: favorites ? JSON.parse(favorites) : {list: []},
    favoritesRecipes: [],
    comments: comments ? JSON.parse(comments) : {list: []},
}

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const baseURL = `https://api.spoonacular.com/recipes/`

    const getRecipes = async (params) => {
        dispatch({type: GET_RECIPES_BEGIN})
        try {
            const response = await axios.get(`${baseURL}complexSearch?apiKey=${API_KEY}&query=${params}`)
            const recipes = response.data.results

            dispatch({
                type: GET_RECIPES_SUCCESS,
                payload: {recipes}
            })
        } catch (error) {
            dispatch({
                type: GET_RECIPES_ERROR,
                payload: {msg: error.response.data.msg}
            })
        }
    }
    const getRecipeDetails = async (recipeId) => {
        dispatch({type: GET_RECIPE_DETAILS_BEGIN})
        try {
            const response = await axios.get(`${baseURL}${recipeId}/information?apiKey=${API_KEY}`)
            const recipeDetails = response.data

            dispatch({
                type: GET_RECIPE_DETAILS_SUCCESS,
                payload: {recipeDetails}
            })
        } catch (error) {
            dispatch({
                type: GET_RECIPE_DETAILS_ERROR,
                payload: {msg: error.response.data.msg}
            })
        }
    }
    const addToFavorites = async (recipe) => {
        dispatch({type: ADD_TO_FAVORITES_BEGIN})
        try {
            const favoritesRecipes = state.favorites
            const recipeId = parseInt(recipe)
            const index = favoritesRecipes.list.indexOf(recipeId);
            if (index !== -1) {
                favoritesRecipes.list.splice(index, 1);
            } else {
                favoritesRecipes.list.push(recipeId)
            }

            localStorage.setItem('favorites', JSON.stringify(favoritesRecipes))
            dispatch({
                type: ADD_TO_FAVORITES_SUCCESS,
                payload: {favoritesRecipes}
            })
        } catch (error) {
            dispatch({
                type: ADD_TO_FAVORITES_ERROR,
                payload: {msg: 'Something went wrong'}
            })
        }
    }
    const getFavoritesRecipes = async () => {
        dispatch({type: GET_FAVORITES_RECIPES_BEGIN})
        try {
            const favoritesRecipesIds = state.favorites.list
            const queryIds = favoritesRecipesIds.toString()

            const response = await axios.get(`${baseURL}informationBulk?ids=${queryIds}&apiKey=${API_KEY}`)
            const favoritesRecipes = response.data

            dispatch({
                type: GET_FAVORITES_RECIPES_SUCCESS,
                payload: {favoritesRecipes}
            })
        } catch (error) {
            dispatch({
                type: GET_FAVORITES_RECIPES_ERROR,
                payload: {msg: error.response.data.msg}
            })
        }
    }
    const addComment = async (comment) => {
        dispatch({type: ADD_COMMENT_BEGIN})
        try {
            const comments = state.comments
            const index = comments.list.findIndex((obj => obj.recipeId === comment.recipeId));
            if (index !== -1) {
                comments.list[index] = comment;
            } else {
                comments.list.push(comment)
            }

            localStorage.setItem('comments', JSON.stringify(comments))
            dispatch({
                type: ADD_COMMENT_SUCCESS,
                payload: {comments}
            })
        } catch (error) {
            dispatch({
                type: ADD_COMMENT_ERROR,
                payload: {msg: 'Something went wrong'}
            })
        }
    }

    return(
        <AppContext.Provider value = {{
            ...state,
            getRecipes,
            getRecipeDetails,
            addToFavorites,
            getFavoritesRecipes,
            addComment
        }}>
            {children}
        </AppContext.Provider>
    )
}
const useAppContext = () => {
    return useContext(AppContext)
}
export {AppProvider, initialState, useAppContext}