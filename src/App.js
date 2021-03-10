import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import Profile from './pages/Profile';
import Edituser from './pages/Edituser';
import Deleteuser from './pages/Deleteuser';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';
import { LOGIN, LOGOUT, REGISTER, DASHBOARD } from './constants/routes';
import { AuthCheck } from './hocs/AuthCheck/AuthCheck';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./css/main.css";
import "./css/util.css";
import "./css/developer.css";

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <div className="App">
        <div className="limiter">
          <div className="container-login100">
              <Switch>
                <AuthCheck exact path={DASHBOARD} component={Dashboard} />
                <AuthCheck exact path="/" component={Dashboard} />
                <AuthCheck exact path="/profile" component={Profile} />
                <AuthCheck path="/users/:id/edit" component={Edituser} />
                <AuthCheck path="/users/:id/delete" component={Deleteuser} />
                <Route exact path={REGISTER} component={Register} />
                <Route exact path={LOGIN} component={Login} />
                <Route exact path={LOGOUT} component={Logout} />
              </Switch>
              </div>
          </div>
        </div>
      </Router>
  );
};
export default App;
