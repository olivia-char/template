import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  browserHistory,
  IndexRoute
} from 'react-router';
import HomePage from './containers/HomePage';
import IntroPage from './containers/IntroPage';
import './style/main.scss';

ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={IntroPage}/>
      <Route path="/HomePage" component={HomePage}/>
    </Router>,
  document.getElementById('app')
);
