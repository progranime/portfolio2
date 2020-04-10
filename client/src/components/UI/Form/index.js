import React from 'react'

import './index.scss'

const Form = props => {
  return (
    <form
      className={props.className}
      method={props.method}
      onSubmit={props.onSubmit}
    >
      {props.children}
    </form>
  )
}

Form.defaultProps = {
  className: '',
  method: 'post'
}

export default Form
