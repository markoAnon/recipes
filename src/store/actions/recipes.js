import * as actionTypes from './actionTypes';
import axios from '../../axios-recipes';

export const fetcRecipesStart = () => {
  return {
    type: actionTypes.FETCH_RECIPES_START
  };
};

export const fetchRecipesSuccess = recipes => {
  return {
    type: actionTypes.FETCH_RECIPES_SUCCESS,
    recipes: recipes
  };
};

export const fetchRecipesFail = error => {
  return {
    type: actionTypes.FETCH_RECIPES_FAIL,
    error: error
  };
};

export const fetchRecipes = (token, userId) => {
  return dispatch => {
    dispatch(fetcRecipesStart());
    const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
    axios.get('/recipes.json' + queryParams)
      .then(response => {
        const fetchedRecipes = [];
        for (let key in response.data) {
          fetchedRecipes.push({
            ...response.data[key],
            id: key
          });
        }
        dispatch(fetchRecipesSuccess(fetchedRecipes));
      })
      .catch(error => {
        dispatch(fetchRecipesFail(error));
      });
  };
};