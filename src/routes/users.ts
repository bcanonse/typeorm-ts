import { Router, Response, Request } from 'express'
import { userCreateService, userGetService } from '../services/users'

const router = Router()

router.post('/', (req: Request, res: Response) => {
  void (async () => {
    try {
      const { firstname, lastname } = req.body
      const user = await userCreateService(firstname, lastname)

      res.json({
        message: 'User created',
        data: user
      })
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  }
  )()
})

router.get('/', (_, res: Response) => {
  void (async () => {
    try {
      const users = await userGetService()
      res.json({
        message: 'users retrieved',
        data: users
      })
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message })
      }
    }
  })()
})

export default router
