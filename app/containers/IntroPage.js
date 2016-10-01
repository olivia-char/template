import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Box from 'grommet/components/Box';
import Headline from 'grommet/components/Headline';
import Paragraph from 'grommet/components/Paragraph';
import Button from 'grommet/components/Button';
import lockers from '../img/lockers.png';
import HomePage from '../containers/HomePage';
import {
  withRouter
} from 'react-router';

class IntroPage extends React.Component {
  constructor(props) {
    super(props);

    this.onClickHandler = this.onClickHandler.bind(this)
  }
  onClickHandler() {
    this.props.router.push('/HomePage')
  }
  render() {
    return (
      <Box style={styles.bgImage} align="center" justify="center" full='vertical' pad="large">
        <Box align="center" colorIndex="light-2" pad="large">
            <Headline>
              Welcome to Olivia's Website
             </Headline>
             <Paragraph>
                This website is a work in progress and constantly changes
             </Paragraph>
        </Box>
        <Box pad="large">
            <Button label="Enter" primary={true} colorIndex="light-2" onClick={this.onClickHandler}/>
         </Box>
      </Box>
    )
  }
}

export default withRouter(IntroPage);

const styles = {
  bgImage: {
    backgroundImage: `url(${lockers})`,
    margin: 'auto',
    justifyContent: 'spaceBetween',
  }
}
