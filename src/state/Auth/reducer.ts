import {User} from "../generateStore";
import {Action} from "redux";

export interface AuthState {
    roles: string[];
    loggedIn: boolean;
    loggedAs: User | null;
}

export const initialState = {
    loggedIn: false,
    loggedAs: null,
    roles: []
};

interface AuthReducerAction {
    window?: Window | null;
}

export const reducer = (state: AuthState = initialState, action: Action & AuthReducerAction): AuthState => {
    switch (action.type) {
        default:
            return state;
    }
};