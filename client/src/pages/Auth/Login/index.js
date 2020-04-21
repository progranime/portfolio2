import React from 'react'

import {
    Form,
    FormGroup,
    FormInput,
    FormLabel,
    FormError,
    Button
} from '../../../components/UI'
import { useForm } from '../../../hooks/useForm'
import { loginValidation } from '../../../utils/validations/auth'

const initialState = {
    email: '',
    password: ''
}

const AuthLogin = () => {
    const {
        values,
        changeHandler,
        submitHandler,
        blurHandler,
        errors
    } = useForm(initialState, loginValidation)

    const submitCallback = () => {
        console.log('show values', values, errors)
    }

    return (
        <div className='main-container main-container--adjustment'>
            <Form
                className='form form--login'
                onSubmit={submitHandler.bind(this, submitCallback)}
            >
                <h2>Log In</h2>
                <FormGroup>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <FormInput
                        type='email'
                        id='email'
                        name='email'
                        onBlur={blurHandler}
                        onChange={changeHandler}
                    />
                    {errors.email && <FormError message={errors.email} />}
                </FormGroup>

                <FormGroup>
                    <FormLabel htmlFor='password'>Password</FormLabel>
                    <FormInput
                        type='password'
                        id='password'
                        name='password'
                        onBlur={blurHandler}
                        onChange={changeHandler}
                    />
                    {errors.password && <FormError message={errors.password} />}
                </FormGroup>

                <Button type='submit' className='btn btn-primary btn-block'>
                    Login
                </Button>
            </Form>
        </div>
    )
}

export default AuthLogin
