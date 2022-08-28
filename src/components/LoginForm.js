import { EMAIL_REGEXP } from "../constants/constants";
import React, { useState } from 'react';
import { connect } from 'react-redux';
import actionFullLogin from "../actions/actionFullLogin";

const LoginForm = ({ onLogin }) => {
  const [login, setLogin] = useState()
  const [password, setPassword] = useState()
  
  return (
    <form className='m-auto p-5 w-100 h-100 text-center bg-light'>
      <div className="m-1">
        <label className="form-label">Email:
          <input type="text"
            required
            className="form-control"
            onChange={e => setLogin(e.target.value)} />
        </label>
      </div>
      <div className="mb-1">
        <label className="form-label">Password:
          <input type="password"
            required
            className="form-control"
            onChange={e => setPassword(e.target.value)} />
        </label>
      </div>
      <button type="submit" className="btn btn-outline-success"
        disabled={((!login || !password) || !login?.match(EMAIL_REGEXP))}
        onClick={(e) => {
          onLogin(login, password);
        }}>Login
      </button>
    </form>
  )
}

const CLoginForm = connect(null, { onLogin: actionFullLogin, to: "/ads" })(LoginForm)

export default CLoginForm;
