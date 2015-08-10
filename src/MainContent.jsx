import React from 'react';
import _ from 'underscore';

import Chart from './Chart';

class MainContent extends React.Component {
  render() {
    console.log('this.props', this.props);
    let repos =_(3).times((i) => {
      let data = {
        number: i,
      };

      return (
        <li>
          <Chart data={data} />
        </li>
      );
    });

    return (
      <div>
        <div>main content</div>
        <ul>{repos}</ul>
      </div>
    );
  }
}

export default MainContent;