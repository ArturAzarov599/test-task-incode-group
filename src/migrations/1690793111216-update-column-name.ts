import { MigrationInterface, QueryRunner } from 'typeorm'

export class UpdateColumnName1690793111216 implements MigrationInterface {
  name = 'UpdateColumnName1690793111216'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" RENAME COLUMN "bossEmail" TO "boss_email"`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" RENAME COLUMN "boss_email" TO "bossEmail"`,
    )
  }
}
