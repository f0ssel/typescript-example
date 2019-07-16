import { getRepository } from 'typeorm';

export class DAO {

    protected static type: string;

    // tslint:disable-next-line: member-ordering
    public static save(entity: any) {
        return getRepository(this.type).save(entity);
    }
}
