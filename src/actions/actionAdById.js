import gql from "../utils/gql";
import { actionPromise } from "./actionPromise";

const actionAdById = (_id) => {
  const queryPromise = gql(
    `query Good ($queryID: String) {
      AdFindOne (query: $queryID) {
        _id title price description createdAt tags comments {_id text} address owner {_id login phones} images {_id url}
      }
    }`,
    { queryID: JSON.stringify([{ _id }]) });

  return actionPromise('goodById', queryPromise);
}

export default actionAdById;
