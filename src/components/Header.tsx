import * as React from "react";
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";
import {Link} from "react-router-dom";

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
            <Navbar color="primary" dark expand="md" >
                <NavbarBrand tag={Link} to="/">Cats-industry</NavbarBrand>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/settings">Settings</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                <NavbarToggler onClick={this.toggle}/>
            </Navbar>
        );
    }
}