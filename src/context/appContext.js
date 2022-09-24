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
    ADD_TO_FAVORITES_ERROR
} from "./actions"
const API_KEY = process.env.REACT_APP_API_KEY
const favorites = localStorage.getItem('favorites')
console.log(JSON.parse(favorites));

const initialState = {
    recipes: [],
    recipeDetails: {},
    favorites: favorites ? JSON.parse(favorites) : {list: []}
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
            console.log(recipeDetails);//to delete
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
            favoritesRecipes.list.push(recipe)
            console.log(favoritesRecipes);
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

    return(
        <AppContext.Provider value = {{
            ...state,
            getRecipes,
            getRecipeDetails,
            addToFavorites
        }}>
            {children}
        </AppContext.Provider>
    )
}
const useAppContext = () => {
    return useContext(AppContext)
}
export {AppProvider, initialState, useAppContext}