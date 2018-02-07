import * as React from "react";
import {AppState} from "../state/store";
import {connect, Dispatch} from "react-redux";
import {User} from "../schema/user";
import {CharactersList} from "../components/Characters";

interface UserPageProps {
    dispatch: Dispatch<object>;
    user: User;
}

let UserPage = (props: UserPageProps) => (
    <div>
        {props.user && <CharactersList list={props.user.characters}/>}
    </div>
);

const mapStateToProps = (state: AppState) => {
    const {user} = state.auth;

    return {user};
};

export default connect(mapStateToProps)(UserPage);