import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import loginImage from "../../images/login.png";
import axios from "axios";
import { BACKEND_API } from '../../constants'
import { toastrService } from '../../services/toastr.service';

const propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

const Register = ({ history }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPasssword] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
  })

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    try {
      if(validateForm(errors)) {
        const { data } = await axios
        .post(BACKEND_API + "register", {
          email, password, first_name: firstname, last_name: lastname
        })
        setFirstname('');
        setLastname('');
        setEmail('');
        setPasssword('');
        setLoginLoading(false);
        if (data && data.user && data.user.id) {
          toastrService.success("User successfully registered.")
          history.push(`/login`);
        } else {
          if (data.error){
            toastrService.error(data.message)
          }
        }
      }else{
        toastrService.error("Invalid Form, Please enter proper values")
        setLoginLoading(false);
      }
    } catch (err) {
      toastrService.error("Something went wrong!")
      setLoginLoading(false);
    }
  };

  const validateForm = (formErrors) => {
    let valid = true;
    if(!email) {
      valid = false
      errors.email = "Please enter email"
    }
    if(!password) {
      valid = false
      errors.password = "Please enter password"
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
        errors.password = value.length < 6
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
      <div className="wrap-login100 wrap-content">
        {loginLoading && <div className={'logonFormLoader'}>&nbsp;</div>}
        <div className="login100-pic js-tilt" data-tilt>
          <img src={loginImage} alt="IMG" />
        </div>
        <form onSubmit={handleOnSubmit} noValidate
          id="login-form"
          action=""
          method="post"
          className="login100-form validate-form"
        >
          <div
            className="wrap-input100 validate-input">
            <input
              value={firstname}
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
              value={lastname}
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
              value={email}
              onChange={handleChange}
              autoComplete="off"
              name="email"
              type="text"
              placeholder="Email"
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
            <button className="login100-form-btn">Register</button>
          </div>

          <div className="text-center p-t-50">
            <Link className="txt2" to="/login">
              Login to your Account
              <i
                className="fa fa-long-arrow-right m-l-5"
                aria-hidden="true"
              ></i>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

Register.propTypes = propTypes;
export default Register;
