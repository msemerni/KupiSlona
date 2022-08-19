import gql from "../utils/gql";
import {actionPromise} from "./actionPromise";
import actionAuthLogin from "./actionAuthLogin";

const actionFullLogin = (login, password) =>
    async (dispatch) => {
        const gqlQuery = `query Login($login: String!, $password: String!) {
      login(login: $login, password: $password)
    }`
        const gqlPromise = gql(gqlQuery, { login, password });
        const action = actionPromise('login', gqlPromise);
        const result = await dispatch(action);
        dispatch(actionAuthLogin(result));
    }

export default actionFullLogin;
