import React from 'react';
import axios from 'axios';

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

    console.log('submitForm search', this.state.search);

    // this.setState({search: ''});

    let repoFullName = this.state.search

    axios({
      method: 'get',
      url: 'https://api.github.com/repos/' + repoFullName,
    })
    .then(function(response) {
      console.log('response', response);
    });
  }

  changeSearch(e) {
    this.setState({
      search: e.target.value,
      // search: this.refs.search.getDOMNode().value,
    }, function() {
      console.log('change', this.state.search);
    });
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

// var FormComp = React.createClass({

//   // To get rid of those input refs I'm moving those values
//   // and the form message into the state
//   getInitialState: function() {
//     return {
//       name: '',
//       email: '',
//       message: ''
//     };
//   },

//   handleSubmit: function(e) {

//     e.preventDefault();

//     var userName = this.state.name.trim();
//     var userEmail = this.state.email.trim();

//     if(!userName || !userEmail) return;

//     this.setState({
//       name: '',
//       email: '',
//       message: 'Please wait...'
//     });

//     // I'm adding a callback to the form submit handler, so you can
//     // keep all the state changes in the component.
//     this.props.onFormSubmit({
//       userName: userName,
//       userEmail: userEmail,
//       url: "/api/submit"
//     }, function(data) {
//       this.setState({ message: data });
//     });
//   },

//   changeName: function(e) {
//     this.setState({
//       name: e.target.value
//     });
//   },

//   changeEmail: function(e) {
//     this.setState({
//       email: e.target.value
//     });
//   },

//   render: function() {
//     // the message and the input values are all component state now
//     return (
//       <div>
//         <div className="result">{ this.state.message }</div>
//         <form className="formElem" onSubmit={ this.handleSubmit }>
//           Name: <input type="text" className="userName" name="userName" value={ this.state.name } onChange={ this.changeName } /><br/>
//           Email: <input type="text" className="userEmail" name="userEmail" value={ this.state.email } onChange={ this.changeEmail } /><br/>
//           <input type="submit" value="Submit" />
//         <form >
//       </div>
//     );
//   }
// });


// var RC= React.createClass({

//   onFormSubmit: function(data, callback){

//      $.ajax({
//         url: this.props.url,
//         dataType: 'json',
//         type: 'POST',
//         data: data,
//         success: callback,
//         error: function(xhr, status, err) {

//           console.error(this.props.url, status, err.toString());

//         }.bind(this)
//       });
//   },

//   render: function() {
//     return <FormComp onFormSubmit={this.onFormSubmit} />
//   }
// });

// React.render(
//   <RC/>,
//   document.getElementById('content')
// );