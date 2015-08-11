import Reflux from 'reflux';
import axios from 'axios';

let actions = Reflux.createActions({
  fetchRepos: {
    children: ['completed','failed'],
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

export default actions;

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