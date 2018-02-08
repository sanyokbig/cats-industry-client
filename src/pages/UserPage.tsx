import * as React from "react";
import {AppState} from "../state/store";
import {connect, Dispatch} from "react-redux";
import {User} from "../schema/user";
import {CharactersList} from "../components/Characters";
import {login, logoff} from "../auth/login";
import {Button, Container} from "reactstrap";

interface UserPageProps {
    dispatch: Dispatch<object>;
    user: User;
    loggedIn: boolean;
}

let UserPage = (props: UserPageProps) => (
    <Container>
        {props.user && <CharactersList list={props.user.characters}/>}
        {props.loggedIn && <Button onClick={login}>Add character</Button>}
        {props.loggedIn && <Button onClick={logoff}>Logoff</Button>}
    </Container>
);

const mapStateToProps = (state: AppState) => {
    const {user, loggedIn} = state.auth;

    return {user, loggedIn};
};

export default connect(mapStateToProps)(UserPage);