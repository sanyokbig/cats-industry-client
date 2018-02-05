import ws from "../ws/socket";

const login = () => {
    const width = 800,
        height = 600,
        x = screen.width / 2 - width / 2,
        y = screen.height / 2 - height / 2;

    const settings = "menubar=0,width=" + width + ",height=" + height + ",left=" + x + ",top=" + y;
    window.open("", "eveAuth", settings);

    ws.Send("login_request", {scope_set: "simple"});
};

export {
    login
};