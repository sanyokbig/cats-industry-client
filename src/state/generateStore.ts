import {createStore} from "redux";

import rootReducer from "./reducers";
import {AuthState, initialState as authInit} from "./Auth/reducer";
import {JobsState, initialState as jobsInit} from "./Jobs/reducer";
import {WsState, initialState as wsInit} from "./Ws/reducer";

export interface AppState {
    jobs: JobsState;
    auth: AuthState;
    ws: WsState;
}

const init: AppState = {
    auth: authInit,
    jobs: jobsInit,
    ws: wsInit
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