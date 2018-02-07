import {store} from "../../state/store";
import {setUser} from "../../state/Auth/actions";
import {User} from "../../schema/user";

interface RestorationPayload {
    user: User;
}

export const restoration = (payload: RestorationPayload) => {
    store.dispatch(setUser(payload.user));
};