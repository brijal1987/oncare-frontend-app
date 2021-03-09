import React from 'react';
import { Link } from 'react-router-dom';
import { authenticationService } from '../../services/authentication.service';

const Menu = () => {
  const currentUser = authenticationService.getCurrentUser();
  return (
    <>
      <div className="menu row">
          <div className="col-md-6">
            <div className="header-link"><Link to={{pathname:"/"}}>Menu</Link>
            </div>
          </div>
          <div className={'col-md-6 top-menu'}>
            <Link to="/logout">Logout</Link>
            <Link to="/users">Users</Link>
            <Link to="/">Home</Link>
          </div>
      </div>
      <div className="menu welcome align-right">
      Welcome <span> {currentUser.firstname} {currentUser.lastname}</span>
      </div>
    </>
  );
};

export default Menu;
