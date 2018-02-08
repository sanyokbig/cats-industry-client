import * as React from "react";
import {Button, Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";
import {Link} from "react-router-dom";
import {login} from "../auth/login";
import WsState from "./WsState";
import {AppState} from "../state/store";
import {connect} from "react-redux";
import {User} from "../schema/user";
import {Portrait} from "./Portrait";

interface HeaderProps {
    loggedIn?: boolean;
    user?: User | null;
}

class Header extends React.Component {
    props: HeaderProps;

    state: {
        isOpen: boolean
    };

    constructor(props: HeaderProps) {
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
        const {loggedIn, user} = this.props;
        var mainID: number = 0;
        if (user) {
            var main = user.characters.filter(c => c.is_main);
            if (main.length) {
                mainID = main[0].id;
            }
        }
        return (
            <Navbar color="primary" dark expand="md">
                <NavbarBrand tag={Link} to="/">Cats-industry</NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/user">User</NavLink>
                        </NavItem>
                        <NavItem>
                            {
                                loggedIn
                                    ? <Portrait characterID={mainID} size={"32"}/>
                                    : <Button onClick={login}>Login</Button>

                            }
                        </NavItem>
                    </Nav>
                </Collapse>
                <WsState/>
            </Navbar>
        );
    }
}

const mapStateToProps = (state: AppState) => {
    const {loggedIn, user} = state.auth;

    return {loggedIn, user};
};

export default connect<{}, {}, HeaderProps>(mapStateToProps)(Header);