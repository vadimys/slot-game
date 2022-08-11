import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './reducers';
import logger from 'redux-logger';
const middleware = [logger];

export const store = configureStore({
    reducer: rootReducer,
    middleware
})
