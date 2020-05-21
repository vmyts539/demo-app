import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import Loader from 'react-loader-spinner'

import Autocomplete from 'react-autocomplete';

import './search.scss';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const AUTOCOMPLETE = 'autocomplete';
const SEARCH = 'search';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      keyword: '',
      userNames: [],
      visibility: false,
     };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputChange = this.inputChange.bind(this);

    this.renderUser = this.renderUser.bind(this);
    this.autocompleteItem = this.autocompleteItem.bind(this);

    this.setUsers = this.setUsers.bind(this);
    this.setKeyword = this.setKeyword.bind(this);
    this.setAutocompletion = this.setAutocompletion.bind(this);
    this.setLoading = this.setLoading.bind(this);
  };

  setUsers(users) { this.setState({users: users}) };
  setKeyword(keyword) { this.setState({keyword: keyword}) };
  setAutocompletion(userNames) { this.setState({userNames: userNames}) };
  setLoading(bool) { this.setState({loading: bool}) };

  getUser(keyword, searchType) {
    searchType === SEARCH && this.setLoading(true)

    axios({
      url: `/${searchType}?search=` + keyword,
      method: 'get',
      data_type: "json",
      content_type: 'application/json',
      headers: { 'Accept': 'application/json'},
    })
    .then((response) => {
      if(searchType === SEARCH) {
        this.setUsers(response.data.data.users);
        this.setLoading(false);
      } else if(searchType === AUTOCOMPLETE) {
        this.setAutocompletion(response.data)
      }
    })
    .catch((response) => {
      console.log(response.errors.message);
    });
  }

  inputChange(event) {
    this.setState({keyword: event.target.value});
    this.getUser(event.target.value, AUTOCOMPLETE);
  }

  handleSelect(val) {
    this.setState({keyword: val});
    this.setAutocompletion([val])
    this.state.keyword && this.getUser(val, SEARCH);
  };

  handleSubmit() {
    this.state.keyword &&
    this.getUser(this.state.keyword, SEARCH)
  }

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

  autocompleteItem(item, isHighlighted) {
    return (
    <div style={{ background: isHighlighted ? 'lightgray' : 'white'}}
         key={this.state.userNames.indexOf(item)}
    >
      {item}
    </div>)
  }

  render() {
    return (
      <div className='container d-flex flex-column justify-content-center'>
        <h1 className='mt-3'>Searching Engine by vmyts SoftServe :)</h1>

        <div className="form d-flex">
          <Autocomplete
            getItemValue={(item) => item}
            items={this.state.userNames}
            renderItem={(item, isHighlighted) => this.autocompleteItem(item, isHighlighted)}
            autoHighlight={true}
            value={this.state.keyword}
            onChange={this.inputChange}
            onSelect={(val) => {
              this.handleSelect(val)
            }}
          />

          <div className="submit d-inline ml-3">
            <button name="button"
                    className="btn btn-primary"
                    onClick={this.handleSubmit}
            >Search</button>
          </div>
        </div>

        <div className="results d-flex flex-column align-items-center">
          {
            this.state.users &&
            this.state.users.map(user => this.renderUser(user))
          }
        </div>

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
        </div>
      </div>
    )
  }
}

export default Search
