import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Box from 'grommet/components/Box';
import Headline from 'grommet/components/Headline';
import Paragraph from 'grommet/components/Paragraph';
import Button from 'grommet/components/Button';
import lockers from '../img/lockers.png';

class IntroPage extends Component {
render() {
    return (
      <Box style={styles.bgImage} direction="column" align="center" justify="center">
        {<Box align="center" colorIndex="light-2" pad="medium">
            {<Headline>
               {"Welcome to Olivia's Website"}
             </Headline>
             }
            {<Paragraph>
                This website constantly changes and will always be a work in progress.
             </Paragraph>
             }
        </Box>
        }
        {<Box pad="small">
            {<Button label="Enter" primary={true}/>}
         </Box>
         }
      </Box>
    )
  }
}



export default IntroPage;

const styles = {
  bgImage: {
    backgroundImage: `url(${lockers})`,
    width: '100%',
    height: '900px',
    justifyContent: 'spaceBetween',
  }
}
