import store from "../state/store";
import {setConnected} from "../state/Ws/actions";

class Ws {
    socket: WebSocket;

    Open(uri: string) {
        this.socket = new WebSocket(uri);

        this.socket.onopen = ev => {
            store.dispatch(setConnected(true));
            // Send stored UID to restore session form server
            // Server generated UID first time client connects
        };

        this.socket.onmessage = ev => {
            const msg = JSON.parse(ev.data);
            switch (msg.op) {
                case "login_uri":
                    window.open(msg.data.uri, "eveAuth");
                    break;
                default:
                    console.log("unknown msg", ev.data);
            }
            console.log(ev.data);
        };

        this.socket.onclose = ev => {
            setTimeout(
                () => {
                    this.Open(uri);
                },
                1000);
        };
    }

    Send(op: string, data?: any) {
        const msg = JSON.stringify({op, data});
        this.socket.send(msg);
    }
}

const ws = new Ws();

ws.Open("ws://localhost:9962/ws");

export default ws;
