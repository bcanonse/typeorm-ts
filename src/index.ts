import 'reflect-metadata'
import app from './app'
import { AppDataSource } from './db'

async function main (): Promise<void> {
  try {
    await AppDataSource.initialize()
    console.log('Database connected')
    app.listen(3000)
    console.log('Server running in port 3000')
  } catch (error) {
    console.error(error)
  }
}

void main()
