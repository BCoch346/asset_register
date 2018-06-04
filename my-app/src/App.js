import React, { Component } from 'react';
import { Route, Switch  } from 'react-router-dom';

import './styles/App.css';

import Footer from './containers/footer.js';
import Header from './containers/header.js';
import LeftAside from './containers/left_aside.js';
import Home from './containers/home.js';
import About from './containers/about.js';

class App extends Component {
  
  constructor(props){
    super(props)
    this.setState({
      
    });
  }
  
  
  render() {
    return (
      <div className="App">
        <Header />
        <div className="columns" id="top">
          <div className="column is-2">
            <LeftAside />
          </div>
          <div className="column">
            <main >
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" exact component={Home} />
                <Route path="/about" exact component={About} />
              </Switch>
            </main>
          </div>
        </div>
        <Footer />

      </div>
    );
  }
}

export default App;
