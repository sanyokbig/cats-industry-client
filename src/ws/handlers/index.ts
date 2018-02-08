import {loginUri} from "./loginUri";
import {sid} from "./sid";
import {auth, logoffOk, logoffFail} from "./auth";

interface Payload {
    type: string;
    payload: any;
}

const handlers: { [key: string]: (payload: any) => void } = {
    login_uri: loginUri,
    sid: sid,
    auth: auth,
    logoff_fail: logoffFail,
    logoff_ok: logoffOk
};

export const HandleMessage = (msg: Payload) => {
    const handler = handlers[msg.type];

    if (!handler) {
        console.log("unknown msg", msg);
        return;
    }

    handler(msg.payload);
};