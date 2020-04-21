import { REQUIRED, VALID_EMAIL } from './index'

export const loginValidation = (values) => {
    let errors = {}

    if (REQUIRED(values.email)) errors.email = 'Email is required'
    else if (!VALID_EMAIL(values.email)) errors.email = 'Invalid email'

    if (REQUIRED(values.password)) errors.password = 'Password is required'

    return errors
}
