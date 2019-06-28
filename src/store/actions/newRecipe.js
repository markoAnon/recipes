import * as actionTypes from './actionTypes';
import axios from '../../axios-recipes';

export const uploadNewRecipeStart = () => {
  return {
    type: actionTypes.UPLOAD_NEWRECIPE_START
  };
};

export const uploadNewRecipeSuccess = (id, recipeData) => {
  return {
    type: actionTypes.UPLOAD_NEWRECIPE_SUCCESS,
    recipeData: recipeData,
    recipeId: id
  };
};

export const uploadNewRecipeFail = error => {
  return {
    type: actionTypes.UPLOAD_NEWRECIPE_FAIL,
    error: error
  };
};

export const uploadNewRecipe = (recipeData, token) => {
  return dispatch => {
    dispatch(uploadNewRecipeStart());
    axios.post('/recipes.json?auth=' + token, recipeData)
      .then(response => {
        dispatch(uploadNewRecipeSuccess(response.data.name, recipeData));
      })
      .catch(error => {
        dispatch(uploadNewRecipeFail(error))
      });
  };
};