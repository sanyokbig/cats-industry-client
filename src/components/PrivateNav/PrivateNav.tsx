import * as React from "react";
import {ReactElement, ReactNode} from "react";
import {connect, Dispatch} from "react-redux";
import {Nav} from "react-bootstrap";

interface Arguments {
    children: ReactNode[];
    require: string;
    roles: string;
    dispatch: Dispatch<object>;
}

const PrivateNav = ({children, require, roles, dispatch, ...rest}: Arguments): ReactElement<Arguments> | null => (
    roles.includes(require) ? (
        <Nav {...rest}>
            {children}
        </Nav>
    ) : null
);

const mapStateToProps = (state: { auth: { roles: string } }) => {
    const {roles} = state.auth;

    return {roles};
};

export default connect(mapStateToProps)(PrivateNav);