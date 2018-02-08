import {Action} from "redux";
import {AuthActions} from "./actions";
import {User} from "../../schema/user";

export interface AuthState {
    loggedIn: boolean;
    user: User | null;
    roles: string[];
}

export const initialState = {
    loggedIn: false,
    user: null,
    roles: []
};

interface AuthReducerAction {
    window?: Window | null;
    user?: User;
}

export const reducer = (state: AuthState = initialState, action: Action & AuthReducerAction): AuthState => {
    switch (action.type) {
        case AuthActions.AUTH_SET_USER:
            return {
                ...state,
                loggedIn: true,
                user: action.user || null
            };
        case AuthActions.AUTH_UNSET_USER:
            return {
                ...state,
                loggedIn: false,
                user: null
            };
        default:
            return state;
    }
};