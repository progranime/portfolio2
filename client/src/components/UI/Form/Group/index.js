import React from 'react'

const FormGroup = props => {
  return <div className={props.className}>{props.children}</div>
}

FormGroup.defaultProps = {
  className: 'form-group'
}

export default FormGroup
