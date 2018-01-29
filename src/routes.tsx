import * as React from "react";
import {Route, Switch} from "react-router-dom";
import JobsPage from "./pages/JobsPage";

const routes = () => (
    <Switch>
        <Route path="/" exact component={JobsPage}/>
    </Switch>
);

export default routes;