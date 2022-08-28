import gql from "../utils/gql";
import { actionPromise } from "./actionPromise";

const actionMyAds = (ownerID) => {
  const gqlQuery = gql(
    `query SearchMyAds ($queryID: String) {
        AdFind (query: $queryID) {
          _id title price description createdAt tags comments {_id text} address owner {_id login} images {_id url}
      }
    }`,
    {
      queryID: JSON.stringify(
        [{ ___owner: ownerID }, { sort: [{ _id: -1 }] }]
      )
    }
  );
  
  return actionPromise("myAds", gqlQuery);
}

export default actionMyAds;
