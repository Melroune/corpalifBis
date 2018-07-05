import React, { Component } from "react";

import ListUser from "../components/listUser";
import './App.css'

class UserManagement extends Component {
  render() {
    return (
      <React.Fragment>
        <ListUser />
      </React.Fragment>
    );
  }
}

export default UserManagement;
