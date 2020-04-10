import { useState, useEffect } from 'react'

export const useForm = (initialState, validate) => {
  const [values, setValues] = useState(initialState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})
  const [isValid, setIsValid] = useState(false)

  const changeHandler = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const submitHandler = (callback, e) => {
    e.preventDefault()

    if (validate !== undefined) {
      const validationErrors = validate(values)
      setErrors(validationErrors)
      setIsSubmitting(true)

      if (isValid) callback()
    } else {
      callback()
    }
  }

  const blurHandler = () => {
    if (validate !== undefined) {
      const validationErrors = validate(values)
      setErrors(validationErrors)
      setIsSubmitting(true)
    }
  }

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0

      if (noErrors) setIsValid(true)
      else setIsValid(false)

      setIsSubmitting(false)
    }
  }, [isSubmitting, errors])

  return {
    values,
    setValues,
    errors,
    changeHandler,
    submitHandler,
    blurHandler
  }
}
