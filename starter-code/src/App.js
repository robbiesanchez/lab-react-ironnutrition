import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './FoodBox';



class App extends Component {
  render() {
    return (
      <div>
        <FoodBox food= {foods}/>
      </div>
    );
  }
}

export default App;
