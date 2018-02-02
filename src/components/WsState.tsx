import * as React from "react";
import {connect} from "react-redux";
import {AppState} from "../state/store";

interface WsStateArguments {
    connected: boolean;
}

const WsState = ({connected}: WsStateArguments) => (
    <span>
        <i className={"fa fa-circle " + (connected ? "text-success" : "text-danger")}/>
    </span>
);

const mapStateToProps = (state: AppState) => {
    const {connected} = state.ws;

    return {connected};
};

export default connect(mapStateToProps)(WsState);