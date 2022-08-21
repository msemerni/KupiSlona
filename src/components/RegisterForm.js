import { EMAIL_REGEXP, PASSWORD_REGEXP } from "../constants/constants";
import actionFullRegister from "../actions/actionFullRegister";
import React, { useState } from 'react';
import { connect } from 'react-redux';

const RegisterForm = ({ onLogin }) => {
  const [login, setLogin] = useState("email");
  const [password, setPassword] = useState("password");
  const [confirmPassword, setConfirmPassword] = useState("confirm password");
  
  return (
    <form className="mx-auto px-5 py-2 w-100 h-100 text-center bg-light">
      
      <div className="mb-2 row justify-content-center">
        <label htmlFor="inputEmail" className="col-sm-3 col-form-label text-end">Email:</label>
        <div className="col-sm-6">
          <input type="email" id="inputEmail" className="form-control" placeholder='email' required onChange={(e) => setLogin(e.target.value)} />
        </div>
      </div>

      <div className="mb-2 row justify-content-center">
        <label htmlFor="inputPass" className="col-sm-3 col-form-label text-end">Password:</label>
        <div className="col-sm-6">
          <input type="password" id="inputPass" className="form-control" placeholder='min 3 symbols (A-Za-z_)' required onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>

      <div className="mb-2 row justify-content-center">
        <label htmlFor="inputConfPass" className="col-sm-3 col-form-label text-end">Confirm password:</label>
        <div className="col-sm-6">
          <input type="password" id="inputConfPass" className="form-control" placeholder='min 3 symbols (A-Za-z_)' required onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
      </div>

      <button type="submit" className="btn btn-outline-success mb-2"
        onClick={(e) => {
                onLogin(login, password)
                e.preventDefault()
        }}
        disabled={(!login || !password) || !login?.match(EMAIL_REGEXP) || !password?.match(PASSWORD_REGEXP) || (password === confirmPassword ? false : true)}>
        Sign Up
      </button>
    </form>
  );
};

const CRegisterForm = connect(null, { onLogin: actionFullRegister, to: "/signup" })(RegisterForm);

export default CRegisterForm;
