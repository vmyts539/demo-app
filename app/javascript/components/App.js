import React from "react"
import axios from 'axios';

import Users from '../components/Users'

class App extends React.Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  };

  handleSearchChange(event) {
    this.setState({keyword: event.target.value})
  };

  handleSubmit(event) {
    event.preventDefault();

    console.log(event);
    console.log(this.state.keyword);

    axios({
      url: '/search?search=' + this.state.keyword,

      method: 'get',
      data_type: "json",
      content_type: 'application/json',
      headers: { 'Accept': 'application/json'},
      })
      .then(function (response) {
          //handle success
          console.log(response);
          console.log('++++++');
      })
      .catch(function (response) {
          //handle error
          console.log(response);
          console.log('-----');
      });
  };


  render () {
    return (
      <>
        <form className="form-group mt-5" action="/search" acceptCharset="UTF-8" method="get">
          <div className="w-50">
            <input type="text" name="search" id="search" className="form-control" autoComplete="off" placeholder="Search Me" onChange={this.handleSearchChange} />
          </div>

          <div className="mt-3">
            <button name="button" type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Search</button>
          </div>
        </form>

        <Users />
      </>
    );
  }
}

export default App
