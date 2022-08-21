import { createStore, applyMiddleware, combineReducers } from 'redux';
import authReducer from '../reducers/authReducer';
import promiseReducer from '../reducers/promiseReducer';
import thunk from 'redux-thunk';

const combinedReducers = combineReducers({auth: authReducer,
                                         info: promiseReducer,
})
const store = createStore(combinedReducers, applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

export default store;
