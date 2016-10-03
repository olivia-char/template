import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Heading,
  Box,
  Image,
  Button,
  Headline
} from 'grommet';
import cosmos from '../img/cosmos.png'
import rocks from '../img/rocks.png'
import pattern from '../img/pattern.png'
import books from '../img/books.png'
import ExampleHeader from '../components/ExampleHeader'




class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
      number: 0
    };
    this.onClickHandler = this.onClickHandler.bind(this)
    this.onClickNumberHandler = this.onClickNumberHandler.bind(this)
  }
  onClickHandler(){
    this.setState({
      isVisible: !this.state.isVisible
    })
  }
  onClickNumberHandler(){
    this.setState({
      number: this.state.number + 1
    })
  }
  render() {
    return (
      <Box>
        <Box>
          <ExampleHeader
          heading="Olivia's Site"
          />
        {/*{
          this.state.isVisible
          ? <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsOez4uT-Jyz_pfUw4xLbfv_qEkG8X39CYhugsrzxlBw8JBpdAjQhRXkQ'/>
          : null
        }
        {this.state.number}
        <Button label="Add number" primary={true} colorIndex="light-2" onClick={this.onClickNumberHandler}/>
        <Button label="Toggle catz" primary={true} colorIndex="light-2" onClick={this.onClickHandler}/>*/}
        </Box>

        <Box direction="row">
          <Box basis="2/3" size={{"height": "medium"}} style={styles.bgImageAboutMe} pad="medium">
            <Box colorIndex="neutral-1" align="center">
              <Headline>
                Hello this is an about me page box
              </Headline>
            </Box>
          </Box>

          <Box style={styles.bgImageBlog} pad="small">
            <Box colorIndex="neutral-1" align="center">
              <Headline>
                Hello this is a blog page box
              </Headline>
            </Box>
          </Box>

          <Box style={styles.bgImageProjects} pad="medium">
            <Box colorIndex="neutral-1" align="center">
              <Headline>
                Hello this is a project page box
              </Headline>
            </Box>
          </Box>

          <Box style={styles.bgImageContact} pad="small">
            <Box colorIndex="neutral-1" align="center">
              <Headline>
                Hello this is a contact page box
              </Headline>
            </Box>
          </Box>

        </Box>
      </Box>
    )
  }
}

export default HomePage;

const styles = {
  bgImageAboutMe: {
    backgroundImage: `url(${cosmos})`,
    height: 500,
  },
  bgImageBlog: {
    backgroundImage: `url(${rocks})`,
    height: 500,
  },
  bgImageProjects: {
    backgroundImage: `url(${books})`,
    height: 500,
  },
  bgImageContact: {
    backgroundImage: `url(${pattern})`,
    height: 500,
  },
}
