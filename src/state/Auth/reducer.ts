import {Action} from "redux";
import {AuthActions} from "./actions";
import {User} from "../../schema/user";

export interface AuthState {
    roles: string[];
    loggedIn: boolean;
    loggedAs: User | null;
    username: string;
}

export const initialState = {
    loggedIn: false,
    loggedAs: null,
    roles: [],
    username: ""
};

interface AuthReducerAction {
    window?: Window | null;
    username?: string;
}

export const reducer = (state: AuthState = initialState, action: Action & AuthReducerAction): AuthState => {
    switch (action.type) {
        case AuthActions.AUTH_SET_CHARACTER:
            return {
                ...state,
                username: action.username || ""
            };
        default:
            return state;
    }
};