import { Link } from 'react-router-dom';
import CAvatar from "./Avatar";
import { connect } from 'react-redux';
import actionAuthLogout from '../actions/actionAuthLogout';
import Logo from './Logo';
import CSearchAdPanel from './SearchAdPanel';
import { useEffect, useState } from 'react';

const BtnLogIn = ({ children }) => {
  return (
    <Link className="text-decoration-none" to="/login">
      <button className="btn btn-outline-primary m-1 btn-sm">{children}</button>
    </Link>
  )
}

const BtnSignUp = ({ children }) => {
  return (
    <Link className="text-decoration-none" to="/signup">
      <button className="btn btn-outline-primary m-1 btn-sm">{children}</button>
    </Link>
  )
}

const CUserInfo = connect(state => ({ children: state.info?.userProfile?.payload?.nick || state.info?.userProfile?.payload?.login, className: "mx-2", to: "/dashboard" }))(Link)
const CBtnLogIn = connect(state => ({ children: 'LogIn', disabled: !!state.auth.token }))(BtnLogIn)
const CBtnSignUp = connect(state => ({ children: 'SignUp', disabled: state.auth.token }))(BtnSignUp)
const CBtnLogOut = connect(state => ({ children: 'LogOut', disabled: !state.auth.token, className: "btn btn-outline-primary m-1 btn-sm" }), { onClick: actionAuthLogout })("button")

const Header = ({onLoginned}) => {
  const [isLoginned, setIsLoginned] = useState("")

  useEffect(() => {
    setIsLoginned(onLoginned)
  }, 
  [isLoginned])

  return(
    <header className="header bg-dark fixed-top p-2 d-flex flex-column">
      <div className="d-flex flex-row justify-content-between mb-1" >
        <div className="d-flex align-items-center">
          <Link to={`/ads`} className="text-decoration-none text-black d-flex align-items-center">
            <Logo />
            <h1 className="fw-bolder" style={{ color: "#0d6efd" }} >
              KupiSlona
            </h1>
          </Link>
        </div>
        <div className="d-flex justify-content-end align-items-center">
          <CAvatar className="col-md-1 p-1" />
          <CUserInfo />
          {!localStorage.authToken ? (<><CBtnLogIn /> <CBtnSignUp /></>) : <CBtnLogOut />}
        </div>
      </div>
      <div>
        {localStorage.authToken && <CSearchAdPanel />}
      </div>
    </header>
  )
}

const CHeader = connect(state => ({ onLoginned: state.info?.userProfile?.payload?.login}))(Header)

export default CHeader;
