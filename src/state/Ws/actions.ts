export enum WsActions {
    WS_SET_CONNECTED = "WS_SET_CONNECTED"
}

export interface SetConnectedAction {
    type: WsActions.WS_SET_CONNECTED;
    connected: boolean;
}

export const setConnected = (connected: boolean): SetConnectedAction => ({type: WsActions.WS_SET_CONNECTED, connected});