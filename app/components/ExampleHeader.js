import React, { Component } from 'react';
import {
  Header,
  Title,
} from 'grommet';

const ExampleHeader = props => {
  return(
    <Header size="large" pad={{"vertical": "medium"}} colorIndex="neutral-1-a" justify='center'>
      <Title>
        {props.title}
      </Title>
    </Header>
  )
}

export default ExampleHeader
          
