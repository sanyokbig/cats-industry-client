import {Action} from "redux";
import {Job} from "../../schema/job";

export interface JobsState {
    list: Job[];
}

export const initialState = {
    list: []
};

interface JobsReducerAction {}

export const reducer = (state: JobsState = initialState, action: Action & JobsReducerAction): JobsState => {
    switch (action.type) {
        default:
            return state;
    }
};