import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';
import Recipes from './containers/Recipes/Recipes';
import NewRecipe from './containers/Recipes/NewRecipe/NewRecipe';
import RecipeAbout from './components/Recipe/RecipeAbout/RecipeAbout';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignUp();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/" exact component={RecipeAbout} />
        <Redirect to="/" />
      </Switch>
    );

    if(this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/new-recipe" component={NewRecipe} />
          <Route path="/my-recipes" component={Recipes} />
          <Route path="/logout" component={Logout} />
          <Route path="/" exact component={RecipeAbout} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState())
  }
}

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( App ) );
