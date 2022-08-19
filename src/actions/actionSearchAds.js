import gql from "../utils/gql";
import { actionPromise } from "./actionPromise";

const actionSearchAds = (searchString) => {
  const gqlQuery = gql(`query SearchAds ($query: String) {
      AdFind (query: $query) {
        _id title price description createdAt tags comments {_id text} address owner {_id login} images {_id url}
      }
    }`,
    {
      query: JSON.stringify(
        [
          { $or: [{ title: `/${searchString}/` }, { description: `/${searchString}/` }] },
          { sort: [{ _id: -1 }] }
        ]
      )
    }
  )
  return actionPromise("searchAds", gqlQuery);
}

export default actionSearchAds;
