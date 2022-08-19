import { BACKEND_URL_UPLOAD } from "../constants/constants";
import { actionPromise } from "./actionPromise";

const actionAvatarUpload = (acceptedFiles) =>
  async (dispatch) => {
    const uploadImg = (oneImagery) => {

      const myFormData = new FormData();
      myFormData.append("photo", oneImagery);

      return fetch(BACKEND_URL_UPLOAD, {
        method: "POST",
        headers: localStorage.authToken ? { Authorization: 'Bearer ' + localStorage.authToken } : {},
        body: myFormData
      })
        .then(res => res.json())
        .then(json => json)
    }

    const allPromiseImg = [];

    for (let i = 0; i < acceptedFiles.length; i++) {
      allPromiseImg.push(uploadImg(acceptedFiles[i]));
    }
    const allUploadedAvatars = actionPromise("allUploadedAvatars", Promise.all(allPromiseImg).then(result => result));
    await dispatch(allUploadedAvatars);
  }

export default actionAvatarUpload;
