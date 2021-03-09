import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { authenticationService } from '../../services/authentication.service';
import axios from "axios";
import { BACKEND_API } from '../../constants'
import { toastrService } from '../../services/toastr.service';

class Logout extends Component {
  componentDidMount() {
    this.handleLogOut();
  }

  handleLogOut = async () => {
    const currentUser = authenticationService.getCurrentUser();
    try {
      const { data } = await axios.get(BACKEND_API + "logout?secret_token="+ currentUser.token)
      if (data && data.success) {
        authenticationService.logout();
      }
    } catch (err) {
      toastrService.error("Something went wrong!")
    }
  };

  render() {
    return <Redirect to="/login" />;
  }
}

export default Logout;
