import {Action} from "redux";

export interface Job {
    product: string;
    runs: number;
    activity: string;
}

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