import { ConfigModule } from '@nestjs/config'
import { DataSource, DataSourceOptions } from 'typeorm'

import databaseConfig from '@config/database.config'

ConfigModule.forRoot({
  envFilePath: '.env.local',
  load: [databaseConfig],
})

const dataSource = new DataSource(databaseConfig() as DataSourceOptions)

export default dataSource
