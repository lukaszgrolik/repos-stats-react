import React from 'react';
import _ from 'underscore';

import repoStore from './repoStore';
import Chart from './Chart';

class MainContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: [],
    };
  }

  componentDidMount() {
    this.unsubscribe = repoStore.listen((data) => {
      // console.log('MainContent componentDidMount data', data);
      // this.requestData = data;
      let repos = data.map((data) => data.data);
      // console.log('repos',repos);

      this.setState({
        repos,
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    // console.log('this.props', this.props);

    let fields = [
      'subscribers_count',
      'stargazers_count',
      'forks',
      'open_issues',
    ];

    return (
      <div>
        <div>main content</div>
        <ul>
          {fields.map((field) => {
            return (
              <li>
                <div>{field}</div>
                <Chart repos={this.state.repos} field={field} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default MainContent;