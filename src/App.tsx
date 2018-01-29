import * as React from "react";
import "./App.css";
import Routes from "./routes";
import Header from "./components/Header";
import "./ws/socket";
import "./bootstrap.css";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Routes/>
            </div>
        );
    }
}

export default App;
