import React from 'react';
import { Link } from 'react-router-dom';
import { authenticationService } from '../../services/authentication.service';

const Menu = () => {
  const currentUser = authenticationService.getCurrentUser();
  return (
    <>
      <div className="menu row">
        <div className="col-md-6">
          <div className="header-link"><Link to={{pathname:"/"}}>OnCare</Link>
          </div>
        </div>
        <div className="col-md-6">
          <div className="welcome align-right">
            Welcome <span> {currentUser.firstname} {currentUser.lastname}</span>
          </div>
        </div>
      </div>
      <div className="menu row  align-right">
        <div className={'col-md-12 top-menu '}>
          <Link to="/logout">Logout</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/">Home</Link>
        </div>
      </div>
    </>
  );
};

export default Menu;
