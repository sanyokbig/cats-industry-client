import {createStore} from "redux";

import rootReducer from "./reducers";
import {AuthState, initialState as authInit} from "./Auth/reducer";
import {initialState as jobsInit, JobsState} from "./Jobs/reducer";
import {initialState as wsInit, WsState} from "./Ws/reducer";

export interface AppState {
    auth: AuthState;
    jobs: JobsState;
    ws: WsState;
}

const initialState: AppState = {
    auth: authInit,
    jobs: jobsInit,
    ws: wsInit
};

export interface User {
    Id: number;
    Name: string;
}

export const store = createStore(
    rootReducer, initialState,
    (<any> window).__REDUX_DEVTOOLS_EXTENSION__ && (<any> window).__REDUX_DEVTOOLS_EXTENSION__()
);

export const getState = () => store.getState() as AppState;