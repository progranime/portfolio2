import React from 'react'

import './index.scss'

const Card = props => {
  return (
    <div className={props.className}>
      <div className='card__container'>
        {props.header && (
          <div className='card__header'>
            <p>{props.header}</p>
          </div>
        )}
        <div className='card__body'>{props.children}</div>
        {props.footer && (
          <div className='card__footer'>
            <p>{props.footer}</p>
          </div>
        )}
      </div>
    </div>
  )
}

Card.defaultProps = {
  className: 'card',
  header: '',
  footer: ''
}

export default Card
