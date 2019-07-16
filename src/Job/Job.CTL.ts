import { JobSVC } from '@src/Job';
import { BodyParam, JsonController, Post } from 'routing-controllers';

@JsonController()
export class JobCTL {

    @Post('/job')
    public createJob(@BodyParam('name') name: string) {
        return JobSVC.create(name);
    }
}
