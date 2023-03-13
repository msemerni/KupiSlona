import gql from "../utils/gql.js";
import { actionPromise } from './actionPromise';

const actionUser = (_id) => {
  const gqlQuery = `query UserInfo ($ID: String) {
      UserFindOne (query: $ID) {
        _id login nick createdAt phones addresses avatar{
          _id url originalFileName
        }
      }
    }`;
  const gqlPromise = gql(gqlQuery, { ID: JSON.stringify([{ _id }]) });
  return actionPromise("userProfile", gqlPromise);
}

export default actionUser;
