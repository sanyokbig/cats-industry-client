import store from "../state/store";
import {setConnected} from "../state/Ws/actions";

class Ws {
    socket: WebSocket;
    tried: number;

    constructor() {
        this.tried = 0;
    }

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
            console.log(ev);
            if (this.tried > 5) {
                this.tried = 0;
                setTimeout(
                    () => {
                        this.Open(uri);
                    },
                    5000);
            } else {
                this.tried++;
                this.Open(uri);
            }
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
