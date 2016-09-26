import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  browserHistory,
  IndexRoute
} from 'react-router';
import MainPage from './containers/MainPage';
import IntroPage from './containers/IntroPage';
import './style/main.scss';

const routes = (
 <Route path="/" component={IntroPage}/>
)

ReactDOM.render(
    <Router history={browserHistory}>
      {routes}
    </Router>,
  document.getElementById('app')
);
