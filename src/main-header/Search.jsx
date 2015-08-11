import React from 'react';

import SearchService from './SearchService';
import actions from '../actions';
import repoStore from '../repoStore';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.submitForm = this.submitForm.bind(this);
    this.changeSearch = this.changeSearch.bind(this);
    this.state = {
      search: 'a/b',
    };
  }

  submitForm(e) {
    e.preventDefault();

    // console.log('submitForm search', this.state.search);

    // this.setState({search: ''});

    let repoFullName = this.state.search;
    let repos = getRepos(this.state.search);

    SearchService.repos = repos;

    actions.fetchRepos(repos);
  }

  changeSearch(e) {
    this.setState({
      search: e.target.value,
      // search: this.refs.search.getDOMNode().value,
    }, () => {
      // console.log('change', this.state.search);
    });
  }

  componentDidMount() {
    this.unsubscribe = repoStore.listen((data) => {
      // console.log('componentDidMount data', data);
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <input
          type="text"
          value={this.state.search}
          xxx-ref="search"
          onChange={this.changeSearch}
          />
          <button>Load</button>
        </form>
      </div>
    );
  }
}

export default Search;

function getRepos(val) {
  var result = val.split(',').map((repo) => {
    return repo.trim();
  });

  return result;
}