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
