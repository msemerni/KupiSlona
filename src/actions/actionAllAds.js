import { actionFulfilled } from "./actionPromise";
import gql from "../utils/gql";

const actionAllAds = () =>
  async (dispatch, getState) => {

    let skipAdsCount;
    const uploadedAds = getState().info?.allAds?.payload || [];
    uploadedAds ? skipAdsCount = uploadedAds.length : skipAdsCount = 0;

    const gqlQuery = await gql(`query SearchAds ($query: String) {
    AdFind (query: $query) {
      _id title price description createdAt tags comments {_id text} address owner {_id login phones addresses} images {_id url}
    }
  }`,
      {
        query: JSON.stringify(
          [
            {},
            {
              sort: [{ _id: -1 }],
              limit: [10],
              skip: [skipAdsCount]
            }
          ]
        )
      }
    )

    const updateAD = await gqlQuery;
    dispatch(actionFulfilled("allAds", [...uploadedAds, ...updateAD]));
  }

export default actionAllAds;
