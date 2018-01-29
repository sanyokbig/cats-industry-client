import {Action} from "redux";

export interface WsState {
    connected: boolean;
}

export const initialState: WsState = {
    connected: true
};

interface WsStateAction {
    window?: Window | null;
}

export const reducer = (state: WsState = initialState, action: Action & WsStateAction): WsState => {
    switch (action.type) {
        default:
            return state;
    }
};