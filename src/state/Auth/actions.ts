import {Dispatch} from "react-redux";

export const AUTH_SET_WINDOW = "auth/setWindow";

export const setWindow = (window: Window | null) =>
    (dispatch: Dispatch<object>) =>
        dispatch({type: AUTH_SET_WINDOW, data: {window}});