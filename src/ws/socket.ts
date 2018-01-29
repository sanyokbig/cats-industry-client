class Ws {
    socket: WebSocket;
    constructor(uri: string) {
        this.socket = new WebSocket(uri);
    }
    Send(op: string, data?: any) {
        const msg = JSON.stringify({op, data});
        this.socket.send(msg);
    }
    Listen() {
        this.socket.onopen = ev => {
            // Send stored UID to restore session form server
            // Server generated UID first time client connects
            let msg = {
                message: "sup"
            };
            this.socket.send(JSON.stringify(msg));
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
    }
}

const ws = new Ws("ws://localhost:9962/ws");
ws.Listen();

export default ws;
