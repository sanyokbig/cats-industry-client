import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {store} from "./state/store";
import App from "./App";
import "./index.css";
import fontAwesome from "@fortawesome/fontawesome";
import * as circle from "@fortawesome/fontawesome-free-solid/faCircle";
import * as envelope from "@fortawesome/fontawesome-free-solid/faEnvelope";
import * as industry from "@fortawesome/fontawesome-free-solid/faIndustry";
import registerServiceWorker from "./registerServiceWorker";

fontAwesome.library.add(envelope);
fontAwesome.library.add(circle);
fontAwesome.library.add(industry);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root") as HTMLElement
);

registerServiceWorker();