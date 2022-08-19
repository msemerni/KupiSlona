import React, { useEffect } from 'react';
import Loader from './Loader';
import AdsCategory from './AdsCategory';
import actionAllAds from '../actions/actionAllAds';
import actionClearAd from '../actions/actionClearAd';
import { connect } from 'react-redux';

const AllAds = ({ ads = [], status, onAllAd, onClearAd }) => {

  useEffect(() => {
    window.onscroll = function (e) {
      if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 1) {
        onAllAd();
      }
    }
    onAllAd();
    return () => {
      window.onscroll = 0;
      onClearAd();
    }
  }, [])

  return ((status !== 'FULFILLED' && localStorage.authToken) ? <Loader /> :
    <div className="row m-0">
      {
        ads.map(ad => <AdsCategory ad={ad} key={ad._id} />)
      }
    </div>
  )
}

const CAllAds = connect(state => ({ads: state.info?.allAds?.payload,status: state.info?.allAds?.status}),
                                 { onAllAd: actionAllAds, onClearAd: actionClearAd })(AllAds)

export default CAllAds;
