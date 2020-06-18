import React from 'react';
import { withRouter } from "react-router-dom";
import _ from 'lodash';
import axios from 'axios';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const userId = this.props.match.params.userId;

    axios({
      url: `/api/users/` + userId,
      method: 'get',
      data_type: "json",
      content_type: 'application/json',
      headers: { 'Accept': 'application/json'},
    })
    .then((response) => {
      this.props.setUser(response.data.data)
    })
    .catch((response) => {
      console.error(response.errors.message);
    });
  }

  render() {
    return (
      <div className="container">
        <h1>User Page</h1>
        {!_.isEmpty(this.props.user) &&
          <>
            <p><span className='font-weight-bold'>Full name:</span> {this.props.user.first_name} {this.props.user.last_name}</p>
            <p><span className='font-weight-bold'>Email</span>: {this.props.user.email}</p>
            <p><span className='font-weight-bold'>Phone</span>: {this.props.user.phone}</p>
          </>
        }
      </div>
    )
  }
}

export default withRouter(UserPage);
