import { useState } from 'react'

export const useForm = initialState => {
  const [values, setValues] = useState(initialState)

  const changeHandler = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  return {
    values,
    setValues,
    changeHandler
  }
}
