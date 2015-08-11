import React from 'react';
import {Bar as BarChart} from 'react-chartjs';
// import ChartJs from 'react-chartjs';

class Chart extends React.Component {
  render() {
    // console.log('intToRGB', intToRGB(hashCode('sass/sass')))
    let labels = this.props.repos.map((repo) => repo.full_name);
    // console.log('labels',labels);
    let datasetData = this.props.repos.map((repo) => repo[this.props.field]);
    // console.log('datasetData',datasetData);
    let chartData = {
      labels,
      // labels: ["sass/sass", "angular/angular"],
      datasets: [
        {
          label: 'My First dataset',
          fillColor: 'rgba(0,0,0,0.5)',
          // fillColor: ['#f00', '#0f0', '#00f'],
          _strokeColor: 'rgba(220,220,220,0.8)',
          _highlightFill: 'rgba(220,220,220,0.75)',
          _highlightStroke: 'rgba(220,220,220,1)',
          data: datasetData,
          // data: [164, 442],
          // bars: [
          //   {fillColor: '#f00'},
          //   {fillColor: '#0f0'},
          //   {fillColor: '#00f'},
          // ]
        },
      ],
    };

    let chartOptions = {

    };

    return (
      <div>
        {/*chartData*/}
        <BarChart data={chartData} options={chartOptions} width="600" height="250" redraw />
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