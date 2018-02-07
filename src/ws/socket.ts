import {getState, store} from "../state/store";
import {setConnected} from "../state/Ws/actions";
import {HandleMessage} from "./handlers";

class Ws {
    uri: string;
    socket: WebSocket;

    Open(uri: string) {
        this.uri = uri;
        this.socket = new WebSocket(uri);

        this.socket.onopen = ev => {
            store.dispatch(setConnected(true));
            const sid = localStorage.getItem("cats-industry.sid");

            if (!sid) {
                this.Send("get_sid");
            } else {
                this.Send("restore_session", {sid});
            }
        };

        this.socket.onmessage = ev => {
            const msg = JSON.parse(ev.data);
            HandleMessage(msg);
        };

        this.socket.onclose = ev => {
            store.dispatch(setConnected(false));
            setTimeout(
                () => {
                    this.Open(uri);
                },
                1000);
        };
    }

    Send(type: string, payload?: any) {
        if (!getState().ws.connected) {
            alert("failed to send: ws closed");
            return;
        }
        const msg = JSON.stringify({type, payload});
        try {
            this.socket.send(msg);
        } catch (e) {
            console.log(e);
            this.Open(this.uri);
        }
    }
}

const ws = new Ws();

ws.Open("ws://localhost:9962/ws");

export default ws;
