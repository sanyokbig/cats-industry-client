export enum AuthActions {
    AUTH_SET_CHARACTER = "AUTH_SET_CHARACTER"
}

export interface SetCharacterAction {
    type: AuthActions.AUTH_SET_CHARACTER;
    username: string;
}

export const setCharacter = (username: string): SetCharacterAction => ({
    type: AuthActions.AUTH_SET_CHARACTER,
    username
});