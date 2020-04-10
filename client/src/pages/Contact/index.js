import React from 'react'

import {
  Button,
  Card,
  Form,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  FormError
} from '../../components/UI'
import { useForm } from '../../hooks/useForm'
import { contactValidation } from '../../utils/validations/contact'

const initialState = {
  fullName: '',
  email: '',
  message: ''
}

const Contact = () => {
  const { values, changeHandler, submitHandler, blurHandler, errors } = useForm(
    initialState,
    contactValidation
  )

  const onSubmit = () => {
    console.log('submit: ', values)
  }

  return (
    <div className='main-container main-container--adjustment'>
      <h2 className='text-center my-4'>
        MY <span className='text-primary'>CONTACT</span>
      </h2>

      <Card>
        <Form onSubmit={submitHandler.bind(this, onSubmit)}>
          <FormGroup>
            <FormLabel htmlFor='fullName'>Full Name</FormLabel>
            <FormInput
              id='fullName'
              name='fullName'
              value={values.fullName}
              className={`form-control ${
                errors.fullName ? 'form__invalid' : ''
              }`}
              onBlur={blurHandler}
              onChange={changeHandler}
            />
            {errors.fullName && <FormError message={errors.fullName} />}
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <FormInput
              type='email'
              id='email'
              name='email'
              className={`form-control ${errors.email ? 'form__invalid' : ''}`}
              onBlur={blurHandler}
              onChange={changeHandler}
              value={values.email}
            />
            {errors.email && <FormError message={errors.email} />}
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor='message'>Message</FormLabel>
            <FormTextarea
              id='message'
              name='message'
              className={`form-control ${
                errors.message ? 'form__invalid' : ''
              }`}
              onBlur={blurHandler}
              onChange={changeHandler}
              value={values.message}
            />
            {errors.message && <FormError message={errors.message} />}
          </FormGroup>

          <div className='text-right'>
            <Button type='submit' className='btn btn-primary'>
              Send Message
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  )
}

export default Contact
