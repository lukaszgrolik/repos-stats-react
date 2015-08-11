import Reflux from 'reflux';

import actions from './actions';

let repoStore = Reflux.createStore({
  listenables: actions,

  // onFetchRepos(data) {
  //   // console.log('onFetchRepos data', data);

  //   this.trigger(data);
  // },

  onFetchReposCompleted(data) {
    // console.log('onFetchReposCompleted data', data);

    this.trigger(data);
  },

  onFetchReposFailed(data) {
    // console.log('onFetchReposFailed data', data);

    this.trigger(data);
  },
});

export default repoStore;