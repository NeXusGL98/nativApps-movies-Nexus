import { Column, PrimaryGeneratedColumn, Entity, BaseEntity } from "typeorm";

@Entity({ name: 'jose_gil_movies' })
export class Movie extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    imdbID: string;

    @Column()
    title: string;

    @Column()
    year: number;

    @Column()
    type: string;

    @Column()
    poster: string

    constructor() {
        super();
    }
}