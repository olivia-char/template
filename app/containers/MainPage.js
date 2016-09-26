import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Heading,
} from 'grommet';
import ExampleHeader from '../components/ExampleHeader'

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ExampleHeader
       title="Olivia's Site"
      />
    )
  }
}

export default MainPage;
