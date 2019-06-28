import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import { updateObject, checkValidity } from '../../../shared/utility';

import classes from '../../../assets/style/NewRecipe.module.css';

class NewRecipe extends Component {

  state = {
    redirect: false,
    controls: {
      title: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Enter Title :D'
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false
      },
      image: {
          elementType: 'input',
          elementConfig: {
              type: 'text',
              placeholder: 'Link to Image'
          },
          value: '',
          validation: {
              required: true,
          },
          valid: false,
          touched: false
      },
      ingredients: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Enter Ingredients'
        },
        value: '',
        validation: {
            required: true,
        },
        valid: false,
        touched: false
      },
      instructions: {
        elementType: 'textarea',
        elementConfig: {
            type: 'text',
            placeholder: 'Enter Instructions'
        },
        value: '',
        validation: {
            required: true,
        },
        valid: false,
        touched: false
      }
    }
  };

  submitHandler = event => {
    let numOfValid = 0;
    event.preventDefault();
    for (let i in this.state.controls) {
      if (this.state.controls[i].valid) {
        numOfValid++;
      } else {
        alert(i + ' is empty, please fill this');
        break;
      }
    }
    if (numOfValid === 4) {
      this.postRecipeHandler();
    }
  }

  postRecipeHandler = () => {
    const recipes = {
      title: this.state.controls.title.value,
      image: this.state.controls.image.value,
      ingredients: this.state.controls.ingredients.value.split(",").map(String),
      instructions: this.state.controls.instructions.value,
      userId: this.props.userId
    }
    this.props.onSendRecipe(recipes, this.props.token);
    this.setState({redirect: true})
  }

  inputChangedHandler = ( event, controlName ) => {
    const updatedControls = updateObject( this.state.controls, {
      [controlName]: updateObject( this.state.controls[controlName], {
        value: event.target.value,
        valid: checkValidity( event.target.value, this.state.controls[controlName].validation ),
        touched: true
      })
    });
    this.setState( { controls: updatedControls } );
  }

  render () {
    const formElementsArray = [];
      for ( let key in this.state.controls ) {
        formElementsArray.push( {
          id: key,
          config: this.state.controls[key]
        });
      }

    let form = formElementsArray.map( formElement => (
      <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        changed={( event ) => this.inputChangedHandler( event, formElement.id )} />
      ));

    let redirectToRecipes = null;
    if (this.state.redirect) {
      redirectToRecipes = <Redirect to='/' />;
    }

    return ( 
      <div className={classes.Recipe}>
        {redirectToRecipes}
        <form onSubmit={this.submitHandler}>
          {form}
          <Button btnType="Success">ADD RECIPE</Button>
        </form>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    recipes: state.newRecipe.recipeData,
    token: state.auth.token,
    userId: state.auth.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSendRecipe: (recipeData, token) => dispatch(actions.uploadNewRecipe(recipeData, token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewRecipe);