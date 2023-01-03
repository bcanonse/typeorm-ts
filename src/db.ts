import { DataSource } from 'typeorm'
import { config } from './config/config'
import { User } from './entities/User'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: config.dbHost,
  port: config.dbPort,
  username: config.dbUser,
  password: config.dbPassword,
  database: config.dbName,
  entities: [User],
  logging: true,
  synchronize: true
})
