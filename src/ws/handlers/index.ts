import {loginUri} from "./loginUri";
import {sid} from "./sid";
import {restoration} from "./restoration";

interface Payload {
    type: string;
    payload: any;
}

const handlers: { [key: string]: (payload: any) => void } = {
    login_uri: loginUri,
    sid: sid,
    restoration: restoration,
};

export const HandleMessage = (msg: Payload) => {
    const handler = handlers[msg.type];

    if (!handler) {
        console.log("unknown msg", msg);
        return;
    }

    handler(msg.payload);
};