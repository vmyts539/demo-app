import React from "react"
import axios from 'axios';

class App extends React.Component {

  constructor() {
    super();
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  };

  handleSearchChange(event) {
    this.setState({keyword: event.target.value})
  };

  handleSubmit(event) {
    event.preventDefault();
    var self = this;

    axios({
      url: '/search?search=' + this.state.keyword,
      method: 'get',

      data_type: "json",
      content_type: 'application/json',
      headers: { 'Accept': 'application/json'},
      })
      .then(function (response) {
        self.setState({users: response.data.data.users});
      })
      .catch(function (response) {
      });
  };


  render () {
    return (
      <div className='container'>
        <h1>h1 Searching Engine by vmyts SoftServe :)</h1>
        <form className="form-group mt-5" action="/search" acceptCharset="UTF-8" method="get">
          <div className="w-50">
            <input type="text" name="search" id="search" className="form-control" autoComplete="off" placeholder="Search Me" onChange={this.handleSearchChange} />
          </div>

          <div className="mt-3">
            <button name="button" type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Search</button>
          </div>
        </form>
        <h1>User goes here</h1>
        {
          this.state.users &&
          this.state.users.map((user) => {
            return <User key={user.id} user={user} />
          })
        }
      </div>
    );
  }
}

const User = ({user}) => {
  return <div className='user'>{user.first_name} {user.last_name}</div>
}

export default App
