import React from 'react';

class Chart extends React.Component {
  render() {
    return (
      <div>
        chart {this.props.data.number}
      </div>
    );
  }
}

export default Chart;