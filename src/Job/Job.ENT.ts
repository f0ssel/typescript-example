import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Job {
    @PrimaryGeneratedColumn()
    public readonly id: number;

    @Column()
    public name: string;
}
