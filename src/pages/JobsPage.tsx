import * as React from "react";
import {AppState} from "../state/generateStore";
import Jobs from "../components/Jobs";
import {connect, Dispatch} from "react-redux";
import {Job} from "../state/Jobs/reducer";

interface JobsPageProps {
    list: Job[];
    dispatch: Dispatch<object>;
}

let JobsPage = (props: JobsPageProps) => (
    <Jobs list={props.list}/>
);

const mapStateToProps = (state: AppState) => {
    return {list: state.jobs.list};
};

export default connect(mapStateToProps)(JobsPage);