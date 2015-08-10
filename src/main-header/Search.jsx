import React from 'react';
import Reflux from 'reflux';
import axios from 'axios';

import SearchService from './SearchService';

let actions = Reflux.createActions({
  fetchRepos: {
    children: ["completed","failed"],
  },
});

actions.fetchRepos.listen(function(repos) {
  fetchRepos(repos)
  .then((data) => {
    let docs = data.map((repo) => {
      return repo.data;
    });

    this.completed(data);
  })
  .catch((err) => {
    this.failed(err);
  });
});

let repoStore = Reflux.createStore({
  listenables: actions,

  onFetchRepos(data) {
    console.log('onFetchRepos data', data)

    this.trigger(data);
  },

  onFetchReposCompleted(data) {
    console.log('onFetchReposCompleted data', data)

    this.trigger(data);
  },

  onFetchReposFailed(data) {
    console.log('onFetchReposFailed data', data)

    this.trigger(data);
  },
});

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

    let repoFullName = this.state.search
    let repos = getRepos(this.state.search);

    SearchService.repos = repos;

    actions.fetchRepos(repos);
    // fetchRepos(repos)
    // .then((data) => {
    //   console.log('data', data);

    //   let docs = data.map((repo) => {
    //     return repo.data;
    //   });
    // });
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
      console.log('componentDidMount data', data);
    });
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
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

function fetchRepos(repos) {
  var promises = repos.map((repo) => {
    return fetchRepo(repo);
  });
  var result = Promise.all(promises);

  return result;
}

function fetchRepo(repoFullName) {
  return axios({
    method: 'get',
    url: 'https://api.github.com/repos/' + repoFullName,
  });
}