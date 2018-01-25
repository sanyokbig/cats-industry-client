const socket = new WebSocket('ws://localhost:9962/ws');

socket.onopen = ev => {
    let msg = {
        message: 'sup'
    };
    socket.send(JSON.stringify(msg));
};

socket.onmessage = ev => {
    console.log(ev.data);
};

export default socket;
