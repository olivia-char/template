import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  browserHistory,
  IndexRoute
} from 'react-router';
import ExampleContainer from './containers/ExampleContainer';

const routes = (
 <Route path="/" component={ExampleContainer}/>
)

ReactDOM.render(
    <Router history={browserHistory}>
      {routes}
    </Router>,
  document.getElementById('app')
);
