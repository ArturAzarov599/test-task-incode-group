import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateAuthAndUserTables1690733846723
  implements MigrationInterface
{
  name = 'CreateAuthAndUserTables1690733846723'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("email" character varying NOT NULL, "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "role" character varying NOT NULL DEFAULT 'user', "bossEmail" character varying, CONSTRAINT "PK_e12875dfb3b1d92d7d7c5377e22" PRIMARY KEY ("email"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "auth" ("email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_b54f616411ef3824f6a5c06ea46" PRIMARY KEY ("email"))`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "auth"`)
    await queryRunner.query(`DROP TABLE "user"`)
  }
}
