import React from 'react'

const FormError = props => {
  return <div className={props.className}>{props.children}</div>
}

FormError.defaultProps = {
  className: 'form__error'
}

export default FormError
