import { MigrationInterface, QueryRunner } from 'typeorm'

export class Seed1690809032554 implements MigrationInterface {
  name = 'Seed1690809032554'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "user" (email, first_name, last_name, role, boss_email) VALUES('test00@example.com','1st','2nd','boss', null)`,
    )
    await queryRunner.query(
      `INSERT INTO "user" (email, first_name, last_name, role, boss_email) VALUES('test01@example.com','1st','2nd','boss','test00@example.com')`,
    )
    await queryRunner.query(
      `INSERT INTO "user" (email, first_name, last_name, role, boss_email) VALUES('test02@example.com','1st','2nd','user','test00@example.com')`,
    )
    await queryRunner.query(
      `INSERT INTO "user" (email, first_name, last_name, role, boss_email) VALUES('test03@example.com','1st','2nd','user','test01@example.com')`,
    )

    await queryRunner.query(
      `INSERT INTO auth (email, password) VALUES('test00@example.com', '$2b$16$CKK3nX2uZmwJ2y4FhqyYfOXhi9dzNDqFW21/Aw4KG5kSFchxzkvzC')`,
    )
    await queryRunner.query(
      `INSERT INTO "auth" (email, password) VALUES('test01@example.com', '$2b$16$/2SJ99Ep5Hf9RLjsxyToR.ZKi7V5fhx1wAxblydXaSyFdZy7Q248i')`,
    )
    await queryRunner.query(
      `INSERT INTO "auth" (email, password) VALUES('test02@example.com', '$2b$16$zswjb9D9cHFJNyKTRdsiRegGZSPBSmOBLVoLktzsQDI7SYua3c1nm')`,
    )
    await queryRunner.query(
      `INSERT INTO "auth" (email, password) VALUES('test03@example.com', '$2b$16$bwSfwoSkqlrax4rTL/D7he1yx.OHoqDDZsURmNz3irgb.25hm3D/6')`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE * FROM user`)
    await queryRunner.query(`DELETE * FROM auth`)
  }
}
