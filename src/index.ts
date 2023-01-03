import 'reflect-metadata'
import app from './app'
import { config } from './config/config'
import { AppDataSource } from './db'

async function main (): Promise<void> {
  try {
    await AppDataSource.initialize()
    console.log('Database connected')
    app.listen(config.port)
    console.log(`Server running in port ${config.port}`)
  } catch (error) {
    console.error(error)
  }
}

void main()
