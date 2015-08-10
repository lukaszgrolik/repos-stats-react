import React from 'react';
import Radium from 'radium';

@Radium
class CopyrightBlock extends React.Component {
  render() {
    let style = {
      backgroundColor: 'pink',

      ':hover': {
        backgroundColor: 'orange',
      },
    };

    return (
      <div style={style}>
        Copyright
      </div>
    );
  }
}

export default CopyrightBlock;