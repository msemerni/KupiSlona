import gql from "../utils/gql";
import { actionPromise } from "./actionPromise";
import actionFullLogin from "./actionFullLogin";

const actionFullRegister = (login, password) =>
  async (dispatch) => {
    const gqlQuery = `mutation CreateUser($login: String!, $password: String!) {
        createUser(login: $login, password: $password) {
          _id login
        }
      }`;
    const gqlPromise = gql(gqlQuery, { login, password });
    const action = actionPromise("register", gqlPromise);
    const result = await dispatch(action);
    if (result) {
      await dispatch(actionFullLogin(login, password));
    }
  };

export default actionFullRegister;
