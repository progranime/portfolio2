import React from 'react'

const FormError = props => {
  return (
    <div className={props.className}>
      <p>{props.message}</p>
    </div>
  )
}

FormError.defaultProps = {
  className: 'form__error',
  message: ''
}

export default FormError
