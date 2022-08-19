import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Dropzone from 'react-dropzone';
import {BACKEND_URL, tagList} from '../constants/constants.js';
import actionImgeriesUpload from '../actions/actionImgeriesUpload';
import actionAddAd from '../actions/actionAddAd.js';

const BtnMyAds = () => {
    return (
      <Link to={`/myads`} className="text-decoration-none text-black">
        <button className='btn btn-secondary btn-sm'>My Ads</button>
      </Link>
    )
  }
  
  const BtnMyProfile = () => {
    return (
      <Link to={`/profile`} className="text-decoration-none text-black">
        <button className='btn btn-dark btn-sm'>User Profile</button>
      </Link>
    )
  }

const Dashboard  = ({ newImg, onUpload, onNewAd}) => {
    // const _id = "62fde8f0c1b7470e6a893178";
    const _id = null;   ////////// сделать динамический айди
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState()
    const [address, setAddress] = useState("")
    const [tags, setTags] = useState([])
    const [imgNew, setImg] = useState([])

    const addNewAd = () => {
      
      const imgArr = [];
  
      if (imgNew) {
        for (const i of imgNew) {
          const newImg = {_id: i._id}
          imgArr.push(newImg)
        }
      }
  
      const newAd = {
        ...(_id ? {_id: _id} : {}),
        ...(imgArr.length ? {images: imgArr[0].url} : {}), /// для аватара
        // ...(imgArr.length ? {images: imgArr} : {}), ///  для объяв
        title: title,
        description: description,
        tags: tags,
        address: address,
        price: +price,
        }
  
      onNewAd(newAd)
    }
  
  
    useEffect (() => {
      if(newImg) {
        setImg(newImg)
      }
    },[newImg])
  
     return (
      <>
        <div className="m-2 d-flex justify-content-between">
          <BtnMyAds/>
          <BtnMyProfile/>
        </div>
        <form className='mx-auto px-5 col-12 text-center bg-light'>
  
          <h5>Add new/Edit advertisement</h5>
  
          <div className="mb-1">
            <label className="form-label w-50">Title:
              <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)} />
            </label>
          </div>
  
          <div className="mb-1">
            <label className="form-label w-50">Category(Tags):
              <select className="form-select" defaultValue={"0"} required onChange={e => { setTags(e.target.value) }}>
                <option disabled value="0">Choose category...</option>
                {tagList.map((item) => {
                  return (<option key={item}>{item}</option>)
                })}
              </select>
            </label>
          </div>
  
          <div className="mb-1">
            <label className="form-label w-50">Description:
              <textarea className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
            </label>
          </div>
  
          <div className="mb-1">
            <label className="form-label w-50">Price ($):
              <input type="number" className="form-control" value={price} onChange={e => setPrice(e.target.value)} />
            </label>
          </div>
  
          <Dropzone onDrop={(acceptedFiles) => { onUpload(acceptedFiles) }}>
            {({ getRootProps, getInputProps }) => (
              <section className="container" style={{ border: "dashed 1px", width: 50 + "%" }}>
                <div style={{ textAlign: "center" }} {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>Drag 'n' drop imageries here, or click to select from disc</p>
                </div>
                <div className="d-flex flex-row justify-content-center p-1">
                    {
                      imgNew.map(img => { return <img style={{ display: "flex", width: 50 + "px", margin: 0.5+"em"}} key={img._id} src={`${BACKEND_URL}${img.url}`} /> })
                    }
                </div>
              </section>
            )}
          </Dropzone>
  
  
          <div className="mb-1">
            <label className="form-label w-50">Address:
              <input type="text" className="form-control" value={address} onChange={e => setAddress(e.target.value)} />
            </label>
          </div>
          <button type="button" className="btn btn-outline-success" 
                  onClick={(e) => {
                           addNewAd()
                           e.preventDefault()
                          }}>Add advertisement</button>
        </form>
      </>
    )
  }

const CDashboard = connect(state => ({ newImg: state.info?.allUploadedImageries?.payload, 
                                         adForEdit: state.info?.goodById?.payload}),
                                        { onUpload: actionImgeriesUpload, onNewAd: actionAddAd})(Dashboard);

export default CDashboard;
