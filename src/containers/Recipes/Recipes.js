import React, { Component } from 'react';

import { connect } from 'react-redux';

import classes from '../../assets/style/Recipes.module.css';
import styles from '../../assets/style/Recipe.module.css';

import Recipe from '../../components/Recipe/Recipe';
import RecipeTitle from '../../components/Recipe/RecipeTitle/RecipeTitle';
import Spinner from '../../components/UI/Spinner/Spinner';
import Modal from '../../components/UI/Modal/Modal';
import axios from '../../axios-recipes';
import Button from '../../components/UI/Button/Button';
import Aux from '../../hoc/Auxx/Aux';
import * as actions from '../../store/actions/index';

class Recipes extends Component {
  state = {
    error: null,
    modalLoad: false,
    modalRecipe: {}
  }

  componentDidMount () {
    this.props.onFetchRecipes(this.props.token, this.props.userId);
  }

  recipeDeleteHandler = id => {
    axios.delete('/recipes/' + id + '.json?auth=' + this.props.token)
      .then(resp => {
        this.props.history.push('/');
        this.props.history.push('/my-recipes');
      });
  }

  showModalHandler = id => {
    this.setState({modalRecipe: this.props.recipes[id]})
    this.setState({modalLoad: true});
  }

  closeModalHandler = () => this.setState({modalLoad: false})

  render () {
    let recipesModal = (
      <div>
          <Recipe
            instructions={this.state.modalRecipe.instructions}
            title={this.state.modalRecipe.title}
            img={this.state.modalRecipe.image}
            ingredient={this.state.modalRecipe.ingredients} />
          <Button clicked={() => this.recipeDeleteHandler(this.state.modalRecipe.id)}>DELETE</Button>
      </div>
    );
    
    return (
      this.props.loading ?
      <Aux>
        <Modal show={this.state.modalLoad} modalClosed={this.closeModalHandler}>
          {recipesModal}
        </Modal>
        <div className={classes.Recipes}>
          {this.props.recipes.map((rec, i) => (
            <RecipeTitle
              recipeTitleClass={styles.Recipe}
              key={i} 
              title={rec.title} 
              img={rec.image}
              showModal={() => this.showModalHandler(i)} />
          ))}
        </div>
        </Aux>
      :
      <Spinner />
    )
  }
};

const mapStateToProps = state => {
  return {
    recipes: state.recipes.recipes,
    loading: state.recipes.loading,
    token: state.auth.token,
    userId: state.auth.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchRecipes: (token, userId) => dispatch(actions.fetchRecipes(token, userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);