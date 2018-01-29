import * as React from "react";
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Button} from "reactstrap";
import {Link} from "react-router-dom";
import {login} from "../auth/login";
import WsState from "./WsState";

export default class Header extends React.Component {
    state: {
        isOpen: boolean
    };

    constructor(props: object) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    toggle = () => {
        console.log(this.state);
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        return (
            <Navbar color="primary" dark expand="md">
                <NavbarBrand tag={Link} to="/">Cats-industry</NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/settings">Settings</NavLink>
                        </NavItem>
                        <NavItem>
                            <Button onClick={login}>Login</Button>
                        </NavItem>
                    </Nav>
                </Collapse>
                <WsState/>
            </Navbar>
        );
    }
}