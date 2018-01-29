import {User} from "../generateStore";
import {Action} from "redux";
import {AUTH_SET_WINDOW} from "./actions";

export interface AuthState {
    roles: string[];
    loggedIn: boolean;
    loggedAs: User | null;
    window: Window | null;
}

export const initialState = {
    loggedIn: false,
    window: null,
    loggedAs: null,
    roles: []
};

interface AuthReducerAction {
    window?: Window | null;
}

export const reducer = (state: AuthState = initialState, action: Action & AuthReducerAction): AuthState => {
    switch (action.type) {
        case AUTH_SET_WINDOW: {
            return {
                ...state,
                window: action.window || null
            };
        }
        default:
            return state;
    }
};