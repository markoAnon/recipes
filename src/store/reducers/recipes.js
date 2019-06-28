import * as actionTypes from '../actions/actionTypes';

const initialState = {
  recipes: [],
  loading: false,
  recipe: false
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCH_RECIPES_START:
      return {
        ...state,
        loading: false,
        recipe: true
      };
    case actionTypes.FETCH_RECIPES_SUCCESS:
      return {
        ...state,
        recipes: action.recipes,
        loading: true,
        recipe: true
      };
    case actionTypes.FETCH_RECIPES_FAIL:
      return {
        ...state,
        loading: false,
        recipe: false
      };
    default:
      return state;
  }
};

export default reducer;