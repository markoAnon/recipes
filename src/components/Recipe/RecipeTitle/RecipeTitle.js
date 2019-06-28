import React from 'react';

const recipeTitle = props => (
  <div onClick={props.showModal} className={props.recipeTitleClass} style={{textAlign: 'center'}}>
    <h2>{props.title}</h2>
    <img src={props.img} alt={props.title} width='150' height='150' />
  </div>
);

export default recipeTitle;