import actionUser from './actionUser';
import history from "../utils/history";
import store from '../reducers/store';

const actionAuthLogin = (token) =>
    (dispatch, getState) => {
        const oldState = getState().auth
        dispatch({ type: 'AUTH_LOGIN', token })
        const newState = getState().auth

        if (newState !== oldState) {
            localStorage.authToken = token
            dispatch(actionUser(store.getState().auth.payload.sub.id));
            history.push("./ads")
        }
    }

export default actionAuthLogin;
