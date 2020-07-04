import React from 'react';
import { withRouter } from "react-router-dom";
import _ from 'lodash';

class UserPage extends React.Component {
  constructor(props) {
    super(props);

    const { fetchUser, setUserId } = this.props;

    setUserId(this.props.match.params.userId)
    fetchUser();
  }

  render() {
    const { error } = this.props
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
        {error &&
          <p className="error">{error}</p>
        }
      </div>
    )
  }
}

export default withRouter(UserPage);
