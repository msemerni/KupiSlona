import React from 'react';
import { BACKEND_URL } from '../constants/constants';
import NO_IMAGE_AVA from '../image/default_ava.jpg';
import store from '../reducers/store';
import { connect } from 'react-redux';
import Loader from './Loader';

const PreviewAvatar = ({ img = [store.getState().info?.userProfile?.payload?.avatar], status, className }) => {

  return (status === 'PENDING' ? <Loader /> :
    <div className={`${className}`}>
      {img && img[0] && img[0].url ?
        <img src={`${BACKEND_URL}${img[0].url}`} className="img-fluid rounded-circle" /> :
        <img src={NO_IMAGE_AVA} className="img-fluid rounded-circle" alt={"avatar.originalFileName"} />
      }
    </div>
  )
}

const CPreviewAvatar = connect(state => ({
                                img: state.info?.allUploadedAvatars?.payload,
                                status: state.info?.allUploadedAvatars?.status,}))(PreviewAvatar)

export default CPreviewAvatar;
