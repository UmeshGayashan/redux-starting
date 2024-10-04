import {createStore,applyMiddleware,compose} from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { createStoreHook } from 'react-redux';
const middleware = [thunk];
const initialState = {};

const store = createStoreHook(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store;