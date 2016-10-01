import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Heading,
  Box,
  Image,
  Button,
  Section,
  Paragraph,
} from 'grommet';
import cosmos from '../img/cosmos.png'
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
        <Box style={styles.bgImage} pad="xlarge">
          <Paragraph colorIndex="light-2">
            Hello this is an about me page box
          </Paragraph>
        </Box>
      </Box>
    )
  }
}

export default HomePage;

const styles = {
  bgImage: {
    backgroundImage: `url(${cosmos})`,
  }
}
