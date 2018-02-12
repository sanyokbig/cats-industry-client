import ws from "../ws/socket";

const scopeSets = {
    simple: "simple",
    industrialist: "industrialist"
};

const openAuthWindow = () => {
    const width = 800,
        height = 600,
        x = screen.width / 2 - width / 2,
        y = screen.height / 2 - height / 2;

    const settings = "menubar=0,width=" + width + ",height=" + height + ",left=" + x + ",top=" + y;
    window.open("", "eveAuth", settings);
};

const login = () => {
    openAuthWindow();

    ws.Send("login_request", {scope_set: scopeSets.simple, sid: localStorage.getItem("cats-industry.sid")});
};

const logoff = () => {
    ws.Send("logoff_request");
};

export {
    login,
    logoff
};