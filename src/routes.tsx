import * as React from "react";
import {Route, Switch} from "react-router-dom";
import JobsPage from "./pages/JobsPage";
import UserPage from "./pages/UserPage";

const routes = () => (
    <Switch>
        <Route path="/" exact component={JobsPage}/>
        <Route path="/user" exact component={UserPage}/>
    </Switch>
);

export default routes;