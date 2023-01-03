import { Router, Response, Request } from 'express'
import { userCreateService, userDeleteService, userGetByIdService, userGetService, userUpdateService } from '../services/users'

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

router.get('/:id', (req: Request, res: Response) => {
  void (async () => {
    const { id } = req.params
    try {
      const user = await userGetByIdService(id)
      if (user == null) return res.status(404).json({ message: 'User does not exist' })
      res.json({
        message: 'user retrieved',
        data: user
      })
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message })
      }
    }
  })()
})

router.put('/:id', (req: Request, res: Response) => {
  void (async () => {
    const { id } = req.params
    const data = req.body
    try {
      const user = await userGetByIdService(id)

      if (user == null) return res.sendStatus(404)

      await userUpdateService(id, data)

      return res.sendStatus(204)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message })
      }
    }
  })()
})

router.delete('/:id', (req: Request, res: Response) => {
  void (async () => {
    const { id } = req.params
    try {
      const result = await userDeleteService(id)

      if (result.affected === 0) { return res.status(404).json({ message: 'User not found' }) }

      return res.sendStatus(204)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message })
      }
    }
  })()
})

export default router
