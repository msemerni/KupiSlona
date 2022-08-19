import { createStore, applyMiddleware, combineReducers } from 'redux';
import authReducer from '../redusers/authReducer';
import promiseReducer from '../redusers/promiseReducer';
import thunk from 'redux-thunk';

const combinedReducers = combineReducers({auth: authReducer,
                                         info: promiseReducer,
})
const store = createStore(combinedReducers, applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

export default store;
