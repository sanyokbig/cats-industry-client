import {createStore, applyMiddleware} from 'redux';

import rootReducer from './reducers';

export default (initialState: object = {}) => {
    const store = createStore(rootReducer, initialState, applyMiddleware());

    return store;
};