import React from 'react';

import RecipeIngredient from './RecipeIngredient/RecipeIngredient';

const recipeIngredients = props => (
  <ul>
    <RecipeIngredient ingredient={props.ingredient} />
  </ul>
);

export default recipeIngredients;