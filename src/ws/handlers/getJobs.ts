import {Job} from "../../schema/job";
import {store} from "../../state/store";
import {setJobs} from "../../state/Jobs/actions";

interface JobsPayload {
    jobs: Job[];
}

export const getJobsOk = (payload: JobsPayload) => {
    if (payload.jobs) {
        console.log(payload.jobs);
        store.dispatch(setJobs(payload.jobs));
    }
};