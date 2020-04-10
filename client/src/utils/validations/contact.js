import { REQUIRED, VALID_EMAIL } from './index'

export const contactValidation = values => {
  let errors = {}

  if (REQUIRED(values.fullName)) errors.fullName = 'Full Name is required'

  if (REQUIRED(values.email)) errors.email = 'Email is required'
  else if (!VALID_EMAIL(values.email)) errors.email = 'Invalid email'

  if (REQUIRED(values.message)) errors.message = 'Message is required'

  return errors
}
