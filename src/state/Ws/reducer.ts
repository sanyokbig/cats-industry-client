import {Action} from "redux";
import {WsActions} from "./actions";
export interface WsState {
    connected: boolean;
}

export const initialState: WsState = {
    connected: false
};

export interface WsStateAction {
    connected?: boolean;
}

export const reducer = (state: WsState = initialState, action: Action & WsStateAction): WsState => {
    switch (action.type) {
        case WsActions.WS_SET_CONNECTED:
            return {
                ...state,
                connected: action.connected || false
            };
        default:
            return state;
    }
};