import {User} from "../../schema/user";

export enum AuthActions {
    AUTH_SET_USER = "AUTH_SET_USER"
}

export interface SetUserAction {
    type: AuthActions.AUTH_SET_USER;
    user: User;
}

export const setUser = (user: User): SetUserAction => ({
    type: AuthActions.AUTH_SET_USER,
    user
});