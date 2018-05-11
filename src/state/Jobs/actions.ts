import {Job} from "../../schema/job";

export enum JobsActions {
    JOBS_SET = "JOBS_SET",
}

export interface SetJobsAction {
    type: JobsActions.JOBS_SET;
    jobs: Job[];
}

export const setJobs = (jobs: Job[]): SetJobsAction => ({
    type: JobsActions.JOBS_SET,
    jobs: jobs
});