import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {store} from "./state/store";
import App from "./App";
import "./index.css";
import fontAwesome from "@fortawesome/fontawesome";
import * as envelope from "@fortawesome/fontawesome-free-solid/faEnvelope";
import registerServiceWorker from "./registerServiceWorker";

fontAwesome.library.add(envelope);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root") as HTMLElement
);

registerServiceWorker();