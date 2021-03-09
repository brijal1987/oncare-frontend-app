import React, { useEffect } from 'react';
import { useHistory } from "react-router";
import PropTypes from 'prop-types';
import axios from "axios";
import { authenticationService } from '../../services/authentication.service';
import { BACKEND_API } from '../../constants'
import { toastrService } from '../../services/toastr.service';

const propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

const Deleteuser = (props) => {
  const history = useHistory();
  const currentUser = authenticationService.getCurrentUser();
  const userID = parseInt(props.match.params.id);
  const fetchData = async () => {
    try {
      const { data } = await axios.delete(`${BACKEND_API}users/${userID}?secret_token=${currentUser.token}`)
      if (data && data.id) {
        toastrService.success("User successfully deleted.")
        history.push(`/users`);
      } else {
        if (data.error){
          toastrService.error(data.message)
        }
      }
      return [];
    } catch (err) {
      toastrService.error("Something went wrong");
      history.push(`/users`);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);
  return (
    <></>
  );
};

Deleteuser.propTypes = propTypes;
export default Deleteuser;
