import React from "react"

class Users extends React.Component {
  constructor(props){
    super(props);
  };

  render () {
    return (
      <>
        <h2 className="mt-5">Users goes here</h2>
        <div className="users">
        </div>
      </>
    );
  }
}

export default Users
