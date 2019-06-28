import React, { Component } from 'react';

class RecipeIngredient extends Component {
  render () {
    return (
      this.props.ingredient ?
        this.props.ingredient.map((ing, i) => (
          <li key={i}>
            {ing}
          </li>
        )) 
        : null
    );
  }
};

export default RecipeIngredient;