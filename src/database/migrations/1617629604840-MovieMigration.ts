import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class MovieMigration1617629604840 implements MigrationInterface {

    private tableName = "jose_gil_movies";
    public async up(queryRunner: QueryRunner): Promise<void> {
        console.log('************** RUNNING MIGRATIONS **************')
        await queryRunner.createTable(new Table({
            name: this.tableName,
            columns: [
                {
                    name: 'id',
                    type: 'bigInt',
                    isPrimary: true,
                    isGenerated: true
                },
                {
                    name: 'imdbID',
                    type: 'varchar',
                    isUnique: false,
                    isNullable: false,
                    length: '60'
                },
                {
                    name: 'title',
                    type: 'varchar',
                    isUnique: false,
                    isNullable: false,
                    length: '150'
                },
                {
                    name: 'year',
                    type: 'int',
                    isUnique: false,
                    isNullable: false,
                },
                {
                    name: 'type',
                    type: 'varchar',
                    isUnique: false,
                    isNullable: false,
                    length: '20'
                },
                {
                    name: 'poster',
                    type: 'varchar',
                    isUnique: false,
                    isNullable: false,
                    length: '250'
                }
            ]
        }), true);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable(this.tableName, true)

    }

}
