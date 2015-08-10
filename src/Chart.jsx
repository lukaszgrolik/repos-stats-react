import React from 'react';
import {Bar as BarChart} from 'react-chartjs';
// import ChartJs from 'react-chartjs';

class Chart extends React.Component {
  render() {
    // console.log('intToRGB', intToRGB(hashCode('sass/sass')))
    let chartData = {
      labels: ['Repo 1', 'Repo 2'],
      datasets: [
        {
          label: 'My First dataset',
          fillColor: 'rgba(0,0,0,0.5)',
          _strokeColor: 'rgba(220,220,220,0.8)',
          _highlightFill: 'rgba(220,220,220,0.75)',
          _highlightStroke: 'rgba(220,220,220,1)',
          data: [65, 59],
        },
        // {
        //   label: "My Second dataset",
        //   fillColor: "rgba(151,187,205,0.5)",
        //   strokeColor: "rgba(151,187,205,0.8)",
        //   highlightFill: "rgba(151,187,205,0.75)",
        //   highlightStroke: "rgba(151,187,205,1)",
        //   data: [28, 48, 40, 19, 86, 27, 90]
        // }
      ],
    };

    let chartOptions = {

    };

    return (
      <div>
        chart {this.props.data.number}
        <BarChart data={chartData} options={chartOptions} width="600" height="250"/>
      </div>
    );
  }
}

export default Chart;

function hashCode(str) { // java String#hashCode
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
     hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

function intToRGB(i){
  var c = (i & 0x00FFFFFF)
      .toString(16)
      .toUpperCase();

  return '00000'.substring(0, 6 - c.length) + c;
}