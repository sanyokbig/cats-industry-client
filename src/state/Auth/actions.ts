import {User} from "../../schema/user";

export enum AuthActions {
    AUTH_SET_USER = "AUTH_SET_USER",
    AUTH_UNSET_USER = "AUTH_UNSET_USER"
}

export interface SetUserAction {
    type: AuthActions.AUTH_SET_USER;
    user: User;
}
export interface UnsetUserAction {
    type: AuthActions.AUTH_UNSET_USER;
}

export const setUser = (user: User): SetUserAction => ({
    type: AuthActions.AUTH_SET_USER,
    user
});
export const unsetUser = (): UnsetUserAction => ({
    type: AuthActions.AUTH_UNSET_USER
});