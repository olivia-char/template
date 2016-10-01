import React, { Component } from 'react';
import {
  Header,
  Heading,
  Box,
  Button,
} from 'grommet';
import CodeIcon from 'grommet/components/icons/base/Code';
import MailIcon from 'grommet/components/icons/base/Mail';
import TestIcon from 'grommet/components/icons/base/Test';
import BookIcon from 'grommet/components/icons/base/Book';



const ExampleHeader = props => {
  return(
    <Header size="large" pad="small" colorIndex="neutral-1-a" justify="center" direction="column">
      <Box pad="medium">
        <Heading >
          {props.heading}
        </Heading>
      </Box>

      <Box direction="row">
        <Box pad={{"horizontal":"small"}}>
          <Button icon={<BookIcon />} label="blog"/>
        </Box>
        <Box pad={{"horizontal":"small"}}>
          <Button icon={<TestIcon />} label="projects"/>
        </Box>
        <Box pad={{"horizontal":"small"}}>
          <Button icon={<MailIcon />} label="contact"/>
        </Box>
        <Box pad={{"horizontal":"small"}}>
          <Button icon={<CodeIcon />} label="github"/>
        </Box>
      </Box>
    </Header>

  )
}

export default ExampleHeader
