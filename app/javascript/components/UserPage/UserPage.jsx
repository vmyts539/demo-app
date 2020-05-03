import React from 'react';

import { useParams } from 'react-router-dom';

class UserPage extends React.Component {
  render () {
    return(
        <div className="container">
          <h1>User Page</h1>
          <p>I am user with id: </p>
        </div>
    )
  }
}

export default UserPage;
