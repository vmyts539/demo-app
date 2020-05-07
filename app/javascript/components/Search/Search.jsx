import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

import $ from 'jquery';
import 'jquery-ui/ui/widgets/autocomplete';

import './search.scss';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputChange = this.inputChange.bind(this);
  };

  getUser(keyword) {
    const self = this;

    axios({
      url: '/search?search=' + keyword,
      method: 'get',
      data_type: "json",
      content_type: 'application/json',
      headers: { 'Accept': 'application/json'},
    })
    .then(function (response) {
      self.setState({data: response.data.data.users});
    })
    .catch(function (response) {
    });
  }

  inputChange(event) {
    this.setState({keyword: event.target.value});

    let autocompletion = [];
    console.log(event.target.value);
    this.getUser(event.target.value);
    this.state.data && this.state.data.map(user => {
      autocompletion.push(user.first_name + ' ' + user.last_name);
    })

    $("#search").autocomplete({source: autocompletion});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getUser(this.state.keyword);
    this.setState({users: this.state.data});
  };

  render () {
    return (
      <div className='container d-flex flex-column justify-content-center'>
        <h1 className='mt-3'>Searching Engine by vmyts SoftServe :)</h1>

        <form className="form-group d-flex justify-content-center mt-4"
              action="/search"
              acceptCharset="UTF-8"
              method="get"
        >
          <div className="search  w-50">
            <div className="">
              <input type="text"
                     name="search"
                     id="search"
                     className="form-control search-field"
                     autoComplete="off"
                     placeholder="Search Me"
                     onChange={this.inputChange}
              />
            </div>

            <div className="mt-3">
              <button name="button"
                      type="submit"
                      className="btn btn-primary"
                      onClick={this.handleSubmit}
              >Search</button>
            </div>
          </div>
        </form>

        <div className="results d-flex flex-column align-items-center">
          {
            this.state.users &&
            this.state.users.map(user => <User key={user.id} user={user} />)
          }
        </div>
      </div>
    )
  }
}

const User = ({user}) => {
  return (
    <div className='user w-50 mt-3'>
      <div className="full-name text-center p-3">{user.first_name} {user.last_name}</div>

      <div className="info d-flex justify-content-between align-items-start">
        <div className="email"><span>Email:</span> {user.email}</div>
        <div className="phone"><span>Phone:</span> {user.phone}</div>
      </div>

      <Link to={"/users/" + user.id}>
        <button className="btn btn-primary mt-3">Show</button>
      </Link>
    </div>
  )
}

export default Search
