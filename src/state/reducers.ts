import {combineReducers} from "redux";
import {reducer as auth} from "./Auth/reducer";
import {reducer as jobs} from "./Jobs/reducer";
import {reducer as ws} from "./Ws/reducer";

export default combineReducers({
    auth,
    jobs,
    ws
});
