import * as React from 'react';
import {Switch, Route} from 'react-router-dom';
import Jobs from './pages/Jobs';
import Settings from './pages/Settings';

const routes = () => (
    <Switch>
        <Route path="/jobs" exact component={Jobs}/>
        <Route path="/settings" exact component={Settings}/>
    </Switch>
);

export default routes;