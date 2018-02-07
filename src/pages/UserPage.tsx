import * as React from "react";
import {AppState} from "../state/store";
import {connect, Dispatch} from "react-redux";

interface UserPageProps {
    dispatch: Dispatch<object>;
}

let UserPage = (props: UserPageProps) => (
    <div>UserPage goes here</div>
);

const mapStateToProps = (state: AppState) => {
    return {};
};

export default connect(mapStateToProps)(UserPage);