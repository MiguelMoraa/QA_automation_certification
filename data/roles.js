import dotenv from 'dotenv'
import { errorMessages } from './errorMessages'
dotenv.config()

  export const VALID_USERS = [
    { USER: process.env.STANDARD_USER, PASSWORD: process.env.PASSWORD },
    { USER: process.env.PROBLEM_USER, PASSWORD: process.env.PASSWORD },
    { USER: process.env.PERFORM_USER, PASSWORD: process.env.PASSWORD }
  ]

  export const INVALID_USERS = [
    { USER: process.env.LOCKED_USER, PASSWORD: process.env.PASSWORD, ERRORMESSAGE: errorMessages.lockedUser.error },
    { USER: process.env.INVALID_USER, PASSWORD: process.env.NON_PASSWORD, ERRORMESSAGE: errorMessages.passwordRequired.error },
    { USER: process.env.NON_USER, PASSWORD: process.env.INVALID_PASSWORD, ERRORMESSAGE: errorMessages.usernameRequired.error },
    { USER: process.env.NON_USER, PASSWORD: process.env.NON_PASSWORD, ERRORMESSAGE: errorMessages.usernameRequired.error },
    { USER: process.env.INVALID_USER, PASSWORD: process.env.INVALID_PASSWORD, ERRORMESSAGE: errorMessages.invalidInfo.error },
  ]