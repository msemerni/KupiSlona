import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import CPreviewAvatar from './PreviewAvatar';
import { EMAIL_REGEXP } from '../constants/constants';
import { connect } from 'react-redux';
import actionChangeProfile from '../actions/actionChangeProfile';
import actionAvatarUpload from '../actions/actionAvatarUpload';
import Dropzone from 'react-dropzone';


const MyProfile = ({ myProfile: { _id, createdAt, login, nick, phones, addresses } = {},
  status, newImg, onChangeProfile, onUpload }) => {

  useEffect(() => {
    if (newImg) {
      setImg(newImg)
    }
  }, [newImg])

  const [myLogin, setMyLogin] = useState(login);
  const [myNick, setMyNick] = useState(nick || "");
  const [myPhones, setMyPhones] = useState(phones || []);
  const [myAddresses, setMyAddresses] = useState(addresses || []);
  const [img, setImg] = useState();

  const changeProfile = () => {
    const newAva = { _id: img[0]._id }

    const newProfile = {
      _id: _id,
      login: myLogin,
      nick: myNick,
      phones: myPhones,
      addresses: myAddresses,
      ...(newAva ? { avatar: newAva } : {}),
    }

    onChangeProfile(newProfile);
  }

  return (status === 'PENDING' || !status ? <Loader /> :
    <form className="mx-auto px-5 py-2 w-100 h-100 text-center bg-light">
      <span className="mb-2">Registered: <b>{new Date(+createdAt).toLocaleDateString('ru-Ru', { year: 'numeric', month: '2-digit', day: '2-digit' })}</b></span>

      <CPreviewAvatar className="col-md-3 p-1 mx-auto" />

      <Dropzone onDrop={(acceptedFiles) => { onUpload(acceptedFiles) }}>
        {({ getRootProps, getInputProps }) => (
          <section className="container mx-auto mb-2 col-sm-8" style={{ border: "dashed 1px", width: 65 + "%" }}>
            <div className="text-center p-2" {...getRootProps()}>
              <input {...getInputProps()} />
              <p className='m-0'>Drag 'n' drop avatar here, or click to select</p>
            </div>
          </section>
        )}
      </Dropzone>

      <div className="mb-2 row">
        <label htmlFor="inputEmail" className="col-sm-2 col-form-label text-end">Email:</label>
        <div className="col-sm-8">
          <input type="text" id="inputEmail" className="form-control" placeholder='*required' value={myLogin} required /// type=email
            onChange={(e) => setMyLogin(e.target.value)} />
        </div>
      </div>

      <div className="mb-2 row">
        <label htmlFor="inputNick" className="col-sm-2 col-form-label text-end">Nick:</label>
        <div className="col-sm-8">
          <input type="text" id="inputNick" className="form-control" placeholder='not required' value={myNick}
            onChange={(e) => setMyNick(e.target.value)} />
        </div>
      </div>

      <div className="mb-2 row">
        <label htmlFor="inputNick" className="col-sm-2 col-form-label text-end">Phones:</label>
        <div className="col-sm-8">
          <input type="text" id="inputNick" className="form-control" placeholder='not required' value={myPhones}
            onChange={(e) => setMyPhones(e.target.value)} />
        </div>
      </div>

      <div className="mb-2 row">
        <label htmlFor="inputNick" className="col-sm-2 col-form-label text-end">Address:</label>
        <div className="col-sm-8">
          <input type="text" id="inputNick" className="form-control" placeholder='not required' value={myAddresses}
            onChange={(e) => setMyAddresses(e.target.value)} />
        </div>
      </div>

      <button type="submit" className="btn btn-outline-success"
        onClick={(e) => {
                  changeProfile();
                  e.preventDefault();
        }}
        disabled={(!login) || !login?.match(EMAIL_REGEXP)}>Change profile
      </button>
    </form>
  )
}

const CMyProfile = connect(state => ({
                           myProfile: state.info?.userProfile?.payload,
                           status: state.info?.userProfile?.status,
                           newImg: state.info?.allUploadedAvatars?.payload}),
                          {onChangeProfile: actionChangeProfile,
                           onUpload: actionAvatarUpload})(MyProfile)

export default CMyProfile;
