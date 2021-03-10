import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router";
import PropTypes from 'prop-types';
import axios from "axios";
import { Link } from "react-router-dom";
import { BACKEND_API } from '../../constants'
import { authenticationService } from '../../services/authentication.service';
import { toastrService } from '../../services/toastr.service';

const propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

const Edituser = (props) => {
  const history = useHistory();

  console.log('history', history)
  const userID = parseInt(props.match.params.id);

  const [loginLoading, setLoginLoading] = useState(true);
  const [user, setUser] = useState([]);
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPasssword] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
  })

  const currentUser = authenticationService.getCurrentUser();

  const fetchData = async () => {
    setLoginLoading(true);

    try {
      const { data } = await axios.get(`${BACKEND_API}users/${userID}?secret_token=${currentUser.token}`)
      if (data && data.user) {
        setUser(data.user);
        setLoginLoading(false);
      } else {
        toastrService.error(data.message)
      }
      return [];
    } catch (err) {
      setLoginLoading(false);
      toastrService.error("Something went wrong");
      history.push(`/`);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    try {
      if(validateForm(errors)) {
        let userData = {
          email, first_name: firstname, last_name: lastname
        }
        if(password) {
          userData.password = password
        }
        const { data } = await axios.put(`${BACKEND_API}users/${userID}?secret_token=${currentUser.token}`, userData)
        setFirstname('');
        setLastname('');
        setEmail('');
        setPasssword('');
        setLoginLoading(false);
        if (data && data.id) {
          toastrService.success("User successfully updated.")
          history.push(`/`);
        } else {
          if (data.error){
            toastrService.error(data.message)
          }
          history.push(`/`);
        }
      }else{
        toastrService.error("Invalid Form, Please enter proper values")
        setLoginLoading(false);
        history.push(`/`);
      }
    } catch (err) {
      toastrService.error("Something went wrong!")
      setLoginLoading(false);
      history.push(`/`);
    }
  };

  const validateForm = (formErrors) => {
    let valid = true;
    if(!email) {
      valid = false
      errors.email = "Please enter email"
    }
    setErrors({
      ...errors,
      errors
    });
    Object.values(formErrors).forEach(
      // if we have an error string set valid to false
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    const validEmailRegex = RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);
    switch (name) {
      case 'firstname':
        setFirstname(value)
        break;
      case 'lastname':
        setLastname(value)
        break;
      case 'email':
        errors.email = value && validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
          setEmail(value)
        break;
      case 'password':
        errors.password = value && value.length < 6
            ? 'Password must be 6 characters long!'
            : '';
            setPasssword(value)
        break;
      default:
        break;
    }

    setErrors({
      ...errors,
      errors
    });
  }

  return (
    <>
      <div className={'wrap-login-full wrap-content'}>
        {loginLoading && <div className={'logonFormLoader'}>&nbsp;</div>}
        {!loginLoading && (<>
          <div className="row">
          <div className="col-md-12"><h1>Users</h1></div>
        </div>
        <hr/>
        {user &&
        (<form onSubmit={handleOnSubmit} noValidate
          id="login-form"
          action=""
          method="post"
          className="login100-form validate-form"
        >
          <div
            className="wrap-input100 validate-input">
            <input
              value={firstname || user.first_name}
              onChange={handleChange}
              autoComplete="off"
              name="firstname"
              type="text"
              placeholder="First Name"
              className="input100"
            />
            <span className="symbol-input100">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </span>
          </div>
          <div className='text-danger'>{errors.firstname.length > 0 && <span className='error'>{errors.firstname}</span>}</div>
          <div
            className="wrap-input100 validate-input">
            <input
              value={lastname || user.last_name}
              onChange={handleChange}
              autoComplete="off"
              name="lastname"
              type="text"
              placeholder="Lastname"
              className="input100"
            />
            <span className="symbol-input100">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </span>
          </div>
          <div className='text-danger'>{errors.lastname.length > 0 && <span className='error'>{errors.lastname}</span>}</div>
          <div
            className="wrap-input100 validate-input">
            <input
              value={email || user.email}
              onChange={handleChange}
              autoComplete="off"
              name="email"
              type="text"
              placeholder="Name"
              className="input100"
            />
            <span className="symbol-input100">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </span>
          </div>
          <div className='text-danger'>{errors.email.length > 0 && <span className='error'>{errors.email}</span>}</div>
          <div className="wrap-input100 validate-input">
            <input
              onChange={handleChange}
              autoComplete="off"
              className="input100"
              type="password"
              name="password"
              placeholder="Password"
            />
            <span className="focus-input100"></span>
            <span className="symbol-input100">
              <i className="fa fa-lock" aria-hidden="true"></i>
            </span>
          </div>
          <div className='text-danger'>{errors.password.length > 0 && <span className='error'>{errors.password}</span>}</div>

          <div className="container-login100-form-btn">
            <button className="login100-form-btn">Update</button>
            <Link className="m-t-5" to="/users">
              Cancel
              <i
                className="fa fa-long-arrow-right m-l-5"
                aria-hidden="true"
              ></i>
            </Link>
          </div>
        </form>)}
        </>)}
      </div>
    </>
  );
};

Edituser.propTypes = propTypes;
export default Edituser;
