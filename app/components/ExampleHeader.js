import React, { Component } from 'react';
import {
  Header,
  Title,
} from 'grommet';

const ExampleHeader = props => {
  return(
    <Header>
      <Title>
        {props.title}
      </Title>
    </Header>
  )
}

export default ExampleHeader
