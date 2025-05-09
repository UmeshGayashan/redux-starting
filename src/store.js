import {createStore,applyMiddleware,compose} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { createStoreHook } from 'react-redux';
import postsReducer from '../src/features/posts/postsSlice';
const middleware = [thunk];
const initialState = {};

const store = configureStore({
    reducer: {
        posts: postsReducer,
    },
})

export default store;