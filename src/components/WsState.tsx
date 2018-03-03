import * as React from "react";
import {connect} from "react-redux";
import {AppState} from "../state/store";

// If import breaks, modify @fortawesome/react-fontawesome/index.d.ts, set FontAwesomeIcon as default export
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

interface WsStateArguments {
    connected: boolean;
}

const WsState = ({connected}: WsStateArguments) => (
    <span>
        <FontAwesomeIcon icon="circle" className={connected ? "text-success" : "text-danger"}/>
    </span>
);

const mapStateToProps = (state: AppState) => {
    const {connected} = state.ws;

    return {connected};
};

export default connect(mapStateToProps)(WsState);