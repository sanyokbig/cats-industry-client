import {store} from "../../state/store";
import {setUser, unsetUser} from "../../state/Auth/actions";
import {User} from "../../schema/user";

interface AuthPayload {
    user: User;
}

export const auth = (payload: AuthPayload) => {
    if (payload.user) {
        store.dispatch(setUser(payload.user));
    }
};

export const logoffOk = () => {
    store.dispatch(unsetUser());
};

export const logoffFail = () => {
    alert("logoff failed");
};