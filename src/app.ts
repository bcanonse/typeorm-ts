import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import userRoutes from './routes/users'

const app = express()

app.use(morgan('dev'))

app.use(express.json())

app.use(cors())

app.use('/api/users', userRoutes)

export default app
