import * as React from "react";
import {connect, Dispatch} from "react-redux";
import {Nav} from "react-bootstrap";
import {NavProps} from "react-bootstrap/lib/Nav";
import {AppState} from "../state/store";

interface Arguments {
    require: string;
    roles: string;
    dispatch: Dispatch<object>;
}

interface PrivateNavArguments extends Arguments, NavProps {
}

const PrivateNav = ({children, require, roles, dispatch, ...rest}: PrivateNavArguments) => (
    roles.includes(require) ? (
        <Nav {...rest}>
            {children}
        </Nav>
    ) : null
);

const mapStateToProps = (state: AppState) => {
    const roles = state.auth ? state.auth.roles : "";

    return {roles};
};

export default connect(mapStateToProps)(PrivateNav);