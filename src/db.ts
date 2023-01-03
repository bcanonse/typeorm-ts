import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: '172.17.0.1',
  port: 5435,
  username: 'ts',
  password: 'ts',
  database: 'ts',
  entities: [],
  logging: true
})
