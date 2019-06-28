import * as actionTypes from '../actions/actionTypes';

const initialState = {
  recipeData: [],
  loading: false
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.UPLOAD_NEWRECIPE_START:
      return {
        ...state,
        loading: false
      };
    case actionTypes.UPLOAD_NEWRECIPE_SUCCESS:
      return {
        ...state,
        loading: true,
        recipeData: state.recipeData
      };
    case actionTypes.UPLOAD_NEWRECIPE_FAIL:
      return {
        ...state,
        loading: false
      }
    default: 
      return state;
  }
};

export default reducer;