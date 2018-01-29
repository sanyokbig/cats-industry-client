import {createStore} from "redux";

import rootReducer from "./reducers";
import {AuthState, initialState as authInit} from "./Auth/reducer";
import {JobsState, initialState as jobsInit} from "./Jobs/reducer";

export interface AppState {
    jobs: JobsState;
    auth: AuthState;
}

const init: AppState = {
    auth: authInit,
    jobs: jobsInit
};

export interface User {
    Id: number;
    Name: string;
}

export default (initialState: AppState = init) => {
    const store = createStore(
        rootReducer, initialState,
        (<any> window).__REDUX_DEVTOOLS_EXTENSION__ && (<any> window).__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};