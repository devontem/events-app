import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import logo from './logo.svg';
import './App.css';
import ListviewContainer from './containers/Listview/Listview';
import DetailviewContainer from './containers/Detailview/Detailview';
import store from './containers/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ListviewContainer} />
            <Route path="/detail/:id" component={DetailviewContainer} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
