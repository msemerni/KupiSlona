import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import Loader from './Loader';
import { BACKEND_URL } from '../constants/constants';
import NO_IMAGE_AVA from '../image/default_ava.jpg';

const Avatar = ({ avatar, status, className }) => {

  if (status === 'FULFILLED') {
    return (status === 'PENDING' ? <Loader /> :
      <div style={{ maxWidth: 40 + "px" }}>
        {avatar && avatar.url ?
          <img src={`${BACKEND_URL}${avatar.url}`} className={`${className}`} alt={"avatar"} /> :
          <img src={NO_IMAGE_AVA} className={`${className}`} alt={"avatar"} />
        }
      </div>
    )
  }
}

const CAvatar = connect(state => ({avatar: state.info?.userProfile?.payload?.avatar,
                                   status: state.info?.userProfile?.status,
                                   className: "img-fluid rounded-circle"
                                  }))(Avatar)

export default CAvatar;
