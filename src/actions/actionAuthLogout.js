import actionUser from "./actionUser";
import store from "../reducers/store";
import history from "../utils/history";

const actionAuthLogout = () =>
  (dispatch) => {
    dispatch({ type: 'AUTH_LOGOUT' })
    localStorage.removeItem('authToken');
    dispatch(actionUser({}));
    store.getState().info = {};
    history.push("/");
    document.location.reload();
  }

export default actionAuthLogout;
