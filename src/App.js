import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import ShoppingList from './Components/ShoppingList';
import Search from './Components/Search';
import CartIcon from './Components/CartIcon';

import Home from './screens/Home';
import Cart from './screens/Cart';

class App extends Component {
  render() {
    console.log('App mounted');
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
      </Router>
    );
  }
}

export default App;
