import * as React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';

// Private route, Argument "require" defines roles required to access route. if role not met - redirect to root
const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        rest.roles.includes(rest.require) ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{
                pathname: '/',
                state: {from: props.location}
            }}/>
        )
    )}/>
);

const mapStateToProps = (state) => {
    const {roles} = state.auth;

    return {roles};
};

export default connect(mapStateToProps)(PrivateRoute);