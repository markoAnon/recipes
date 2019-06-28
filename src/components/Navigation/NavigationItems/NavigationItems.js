import React from 'react';

import classes from '../../../assets/style/NavigationItems.module.css';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem clicked={props.clicked} link="/" exact>About</NavigationItem>
    {props.isAuthenticated ? <NavigationItem clicked={props.clicked} link="/my-recipes">My Recipes</NavigationItem> : null}
    {props.isAuthenticated ? <NavigationItem clicked={props.clicked} link="/new-recipe">New Recipe</NavigationItem> : null}
    {!props.isAuthenticated
      ? <NavigationItem clicked={props.clicked} link="/auth">Sign In/Up</NavigationItem>
      : <NavigationItem clicked={props.clicked} link="/logout">Logout</NavigationItem>}
  </ul>
);

export default navigationItems;