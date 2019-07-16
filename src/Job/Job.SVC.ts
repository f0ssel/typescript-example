import { Job, JobDAO } from '@src/Job';

export class JobSVC {

    public static create(name: string) {
        const job = new Job();
        job.name = name;
        return JobDAO.save(job);
    }
}
