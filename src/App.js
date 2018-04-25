/**********************
 * IMPORT NPM COMPONENT
 * *******************/
import React, { Component } from 'react';
import { Route, Switch  } from 'react-router-dom';

/**********************
 * IMPORT LOCAL COMPONENT
 * *******************/
 import Header from './containers/Header.js';

 
/**********************
 * IMPORT STYLE
 * *******************/
import './App.css';


/**********************
 * MAIN APPLICATION
 * *******************/
class App extends Component {
  constructor(props){
    super(props);
      this.state = {
      };
  }
    
  componentDidMount() {

  }
    
  render() {
    return (
      <div className="App">
        <Header className="header-bar" />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
