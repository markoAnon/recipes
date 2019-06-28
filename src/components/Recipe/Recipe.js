import React from 'react';

import RecipeIngredients from './RecipeIngredients/RecipeIngredients';
import RecipeTitle from './RecipeTitle/RecipeTitle';
import RecipeInstructions from './RecipeInstructions/RecipeInstructions';

const Recipe = props => (
  <div>
    <RecipeTitle 
      title={props.title}
      img={props.img} />
    <h3>Ingredients:</h3>
    <RecipeIngredients ingredient={props.ingredient} />
    <h3>Instructions:</h3>
    <RecipeInstructions instructions={props.instructions} />
  </div>
);

export default Recipe;