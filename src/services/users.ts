import { DeleteResult, UpdateResult } from 'typeorm'
import { User } from '../entities/User'

export const userCreateService = async (firstname: string, lastname: string): Promise<User> => {
  const user = new User()
  user.firstname = firstname
  user.lastname = lastname

  return await user.save()
}

export const userGetService = async (): Promise<User[]> => {
  return await User.find()
}

export const userGetByIdService = async (id: string): Promise<User | null> => {
  return await User.findOneBy({ id })
}

export const userUpdateService = async (id: string, data: User): Promise<UpdateResult> => {
  return await User.update({ id }, data)
}

export const userDeleteService = async (id: string): Promise<DeleteResult> => {
  return await User.delete({ id })
}
