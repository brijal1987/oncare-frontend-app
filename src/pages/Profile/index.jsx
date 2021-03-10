import React, { useState, useEffect } from 'react';
import axios from "axios";
import { BACKEND_API } from '../../constants'
import { authenticationService } from '../../services/authentication.service';
import { toastrService } from '../../services/toastr.service';

const Profile = () => {
  const [loginLoading, setLoginLoading] = useState(true);
  const [profileData, setProfileData] = useState([]);
  const currentUser = authenticationService.getCurrentUser();

  const fetchData = async () => {
    setLoginLoading(true);

    try {
      const { data } = await axios
        .get(BACKEND_API + "profile?secret_token="+ currentUser.token)
      setLoginLoading(false);
      if (data && data.user) {
        setProfileData(data.user);
      } else {
        toastrService.error(data.message)
      }
      return [];
    } catch (err) {
      setLoginLoading(false);
        toastrService.error("Something went wrong");
    }
  };


  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className={'wrap-login-full wrap-content'}>
        {loginLoading && <div className={'logonFormLoader'}>&nbsp;</div>}
        {!loginLoading && (<>
          <div className="row">
          <div className="col-md-12"><h1>User Profile</h1></div>
        </div>
        <hr/>
        <div className="row">
          <table width="80%" border="0" cellPadding="20" cellSpacing="10">
            <tbody>
              <tr>
                <td>Firstname:</td>
                <td>{profileData.first_name}</td>
              </tr>
              <tr>
                <td>Lastname:</td>
                <td>{profileData.last_name}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{profileData.email}</td>
              </tr>
            </tbody>
          </table>

        </div>
        </>)}
      </div>
    </>
  );
};

export default Profile;
