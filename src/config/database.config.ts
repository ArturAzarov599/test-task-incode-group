import { join } from 'path'
import { registerAs } from '@nestjs/config'

export default registerAs('databaseConfig', () => ({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  autoLoadEntities: true,
  entities: [join(__dirname, process.env.DATABASE_ENTITIES_PATH)],
  migrations: [process.env.DATABASE_MIGRATIONS_PATH],
  cli: {
    migrationsDir: 'src/migrations',
  },
}))
