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

const reducer = (state, action) => {
    //GET RECIPES
    if(action.type === GET_RECIPES_BEGIN){
        return {...state, /*isLoading: true*/}
    }
    if(action.type === GET_RECIPES_SUCCESS){
        return {
            ...state, 
            recipes: action.payload.recipes,
            /*isLoading: false,
            showAlert: true,
            alertType: 'success',
            alertText: ''*/
        }
    }
    if(action.type === GET_RECIPES_ERROR){
        return {
            ...state, 
            /*isLoading: false,
            showAlert: true,
            alertType: 'danger',
            alertText: action.payload.msg*/
        }
    }
    //GET RECIPE DETAILS
    if(action.type === GET_RECIPE_DETAILS_BEGIN){
        return {...state}
    }
    if(action.type === GET_RECIPE_DETAILS_SUCCESS){
        return {
            ...state, 
            recipeDetails: action.payload.recipeDetails,
        }
    }
    if(action.type === GET_RECIPE_DETAILS_ERROR){
        return {
            ...state, 
        }
    }
    //ADD TO FAVORITES
    if(action.type === ADD_TO_FAVORITES_BEGIN){
        return {...state}
    }
    if(action.type === ADD_TO_FAVORITES_SUCCESS){
        return {
            ...state, 
            favorites: action.payload.favoritesRecipes,
        }
    }
    if(action.type === ADD_TO_FAVORITES_ERROR){
        return {
            ...state, 
        }
    }
    //GET FAVORITES RECIPES
    if(action.type === GET_FAVORITES_RECIPES_BEGIN){
        return {...state}
    }
    if(action.type === GET_FAVORITES_RECIPES_SUCCESS){
        return {
            ...state, 
            favoritesRecipes: action.payload.favoritesRecipes,
        }
    }
    if(action.type === GET_FAVORITES_RECIPES_ERROR){
        return {
            ...state, 
        }
    }
    //ADD COMMENT
    if(action.type === ADD_COMMENT_BEGIN){
        return {...state}
    }
    if(action.type === ADD_COMMENT_SUCCESS){
        return {
            ...state, 
            comments: action.payload.comments,
        }
    }
    if(action.type === ADD_COMMENT_ERROR){
        return {
            ...state, 
        }
    }

    throw new Error(`no such action : ${action.type}`)
}

export default reducer