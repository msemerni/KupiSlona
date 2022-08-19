import { actionFulfilled } from "./actionPromise";

const actionClearAd = () =>
  async (dispatch) => {
    await dispatch(actionFulfilled("allAds", []));
  }

export default actionClearAd;
