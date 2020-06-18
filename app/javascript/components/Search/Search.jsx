import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

import Loader from 'react-loader-spinner'
import Highlighter from "react-highlight-words";
import Autocomplete from 'react-autocomplete';

import './search.scss';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const AUTOCOMPLETE = 'autocomplete';
const SEARCH = 'search';

const Search = ({
  keyword,
  loading,
  userNames,
  users,
  error,
  highlightedSearchResults,

  changeKeyword,
  setAutocompletion,
  setUsers,
  setLoading,
  setHighlightedSearchResults,
}) => {
  const getUser = (keyword, searchType) => {
    searchType === SEARCH && setLoading(true)

    axios({
      url: `/${searchType}?search=` + keyword,
      method: 'get',
      data_type: "json",
      content_type: 'application/json',
      headers: { 'Accept': 'application/json'},
    })
    .then((response) => {
      if(searchType === SEARCH) {
        setLoading(false)
        setUsers(response.data.data.users);
        setHighlightedSearchResults(keyword);
      } else if(searchType === AUTOCOMPLETE) {
        setAutocompletion(response.data);
      }
    })
    .catch((response) => {
      console.error(response.errors.message);
    });
  }

  const inputChange = event => {
    changeKeyword(event.target.value);
    getUser(event.target.value, AUTOCOMPLETE);
  }

  const handleSelect = val => {
    changeKeyword(val);
    setAutocompletion([val]);
    keyword && getUser(val, SEARCH);
  };

  const handleSubmit = () => {
    keyword &&
    getUser(keyword, SEARCH)
  };

  const highlightResults = (highlightedText, searchWords) => {
    return (
      <Highlighter
        highlightClassName="highlighted-word"
        searchWords={[searchWords]}
        autoEscape={true}
        textToHighlight={highlightedText}
      />
    )
  }

  const autocompleteItem = (item, isHighlighted) => {
    return (
    <div style={{ background: isHighlighted ? 'lightgray' : 'white'}}
         key={userNames.indexOf(item)}
    >
      {highlightResults(item, keyword)}
    </div>)
  }

  const renderUser = (user) => {
    return(
      <div className='user w-50 mt-3' key={user.id}>
        <div className="full-name text-center p-3">
          {highlightResults(`${user.first_name} ${user.last_name}`, keyword)}
        </div>

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

  return (
    <div className='container d-flex flex-column justify-content-center'>
      <h1 className='mt-3'>Searching Engine by vmyts SoftServe :)</h1>

      <div className="form d-flex">
        <Autocomplete
          getItemValue={(item) => item}
          items={userNames}
          renderItem={(item, isHighlighted) => autocompleteItem(item, isHighlighted)}
          autoHighlight={true}
          value={keyword}
          onChange={inputChange}
          onSelect={(val) => {
            handleSelect(val)
          }}
        />

        <div className="submit d-inline ml-3">
          <button name="button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
          >Search</button>
        </div>
      </div>

      <div className="results d-flex flex-column align-items-center">
        {
          users &&
          users.map(user => renderUser(user))
        }
      </div>

      <div className="loader-wrapper">
        { loading &&
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

export default Search
