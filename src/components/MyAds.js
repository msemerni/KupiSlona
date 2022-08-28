import React, { useEffect } from 'react';
import Loader from './Loader';
import AdsCategory from './AdsCategory';
import actionMyAds from '../actions/actionMyAds';
import { connect } from 'react-redux';

const MyAds = ({ ads = [], status, ownerID, onMyAds }) => {
  useEffect(() => {
    onMyAds(ownerID)
  }, [ownerID])
  return (status === 'PENDING' || !status ? <Loader /> :
    <div className="row">
      {
        ads.map(ad => <AdsCategory ad={ad} key={ad._id} />)
      }
    </div>
  )
}

const CMyAds = connect(state => ({ads: state.info?.myAds?.payload, 
                                  status: state.info?.myAds?.status,
                                  ownerID: state.auth?.payload?.sub?.id}), 
                                  {onMyAds: actionMyAds})(MyAds)

export default CMyAds;
