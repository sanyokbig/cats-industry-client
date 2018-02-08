import {store} from "../../state/store";
import {setUser} from "../../state/Auth/actions";
import {User} from "../../schema/user";

interface AuthPayload {
    user: User;
}

export const auth = (payload: AuthPayload) => {
    if (payload.user) {
        store.dispatch(setUser(payload.user));
    }
};