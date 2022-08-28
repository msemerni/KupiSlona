import '../App.scss';
import React from 'react';
import { Route, Redirect, Switch} from 'react-router-dom';
import CRegisterForm from '../components/RegisterForm';
import CLoginForm from '../components/LoginForm';
import CMyProfile from '../components/MyProfile';
import CDashboard from '../components/Dashboard';
import CSearchAds from '../components/SearchAds';
import CPageAds from '../components/PageAds';
import CAllAds from '../components/AllAds';
import Page404 from '../components/Page404';
import CMyAds from '../components/MyAds';

const Content = () =>
  <div className='position-absolute mx-auto' style={{ top: 125 + "px", left: 0 + "px", right: 0 + "px", bottom: 0 + "px" }}>
    <Switch>
      <Route path="/login" component={CLoginForm} />
      <Route path="/signup" component={CRegisterForm} />
      <Route path="/dashboard" component={CDashboard} />
      <Route path="/ads/:_id" component={CPageAds} />
      <Route path="/ads" component={CAllAds} />
      <Route path="/search" component={CSearchAds} />
      <Route path="/myads" component={CMyAds} />
      <Route path="/profile" component={CMyProfile} />
      <Redirect from="/" to="/ads" />
      <Route path="*" component={Page404} />
    </Switch>
  </div>

export default Content;
