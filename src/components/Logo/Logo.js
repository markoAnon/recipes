import React from 'react';

import classes from '../../assets/style/Logo.module.css';

import recipeLogo from '../../assets/image/recipe.png';

const logo = (props) => (
  <div className={classes.Logo} style={{height: props.height}}>
    <img src={recipeLogo} alt='MyRecipe' />
  </div>
);

export default logo;