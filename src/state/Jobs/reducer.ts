import {Action} from "redux";
import {Job} from "../../schema/job";
import {JobsActions} from "./actions";

export interface JobsState {
    list: Job[];
}

export const initialState = {
    list: []
};

interface JobsReducerAction {
    jobs?: Job[];
}

export const reducer = (state: JobsState = initialState, action: Action & JobsReducerAction): JobsState => {
    switch (action.type) {
        case JobsActions.JOBS_SET:
            if (!action.jobs) {
                return state;
            }
            return {
                list: action.jobs
            };
        default:
            return state;
    }
};