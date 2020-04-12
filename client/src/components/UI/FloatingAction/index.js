import React from 'react'

import './index.scss'

const FloatingAction = props => {
  return (
    <div className='floating-action'>
      <div className='floating-action__container'>{props.children}</div>
    </div>
  )
}

export default FloatingAction
