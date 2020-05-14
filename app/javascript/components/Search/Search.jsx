import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import Loader from 'react-loader-spinner'


import './search.scss';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

class Search extends React.Component {
  constructor() {
    super();
    this.state = { loading: false };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.setUsers = this.setUsers.bind(this);
    this.renderUser = this.renderUser.bind(this);
    this.setLoading = this.setLoading.bind(this);
  };

  setUsers(users) { this.setState({users: users}) }
  setLoading(bool) { this.setState({loading: bool}) }

  getUser(keyword) {
    this.setLoading(true)

    axios({
      url: '/search?search=' + keyword,
      method: 'get',
      data_type: "json",
      content_type: 'application/json',
      headers: { 'Accept': 'application/json'},
    })
    .then((response) => {
      this.setUsers(response.data.data.users);
      this.setLoading(false);
    })
    .catch((response) => {
      console.log(response.errors.message);
    });
  }

  inputChange(event) {
    this.setState({keyword: event.target.value});
    // this.getUser(event.target.value);
    // this.state.data && this.state.data.map(user => {
    //   // autocomplete logic
    // })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getUser(this.state.keyword);
  };

  renderUser(user) {
    return(
      <div className='user w-50 mt-3' key={user.id}>
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
        <div className="loader-wrapper">
            {
              this.state.loading &&
              <div className="loader">
                <Loader
                  type="Oval"
                  color="#00BFFF"
                  height={100}
                  width={100}
                />
              </div>
            }

          <div className="results d-flex flex-column align-items-center">
            {
              this.state.users &&
              this.state.users.map(user => this.renderUser(user))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Search
