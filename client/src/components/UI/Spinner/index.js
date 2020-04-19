import React from 'react'

import './index.scss'

const Spinner = props => {
  return (
    <div className='spinner'>
      <div className='spinner__container'>
        <div className='spinner__image-holder'>
          <img src={props.imageSrc} alt='' />
          <p>{props.title}</p>
        </div>
      </div>
    </div>
  )
}

Spinner.defaultProps = {
  imageSrc: `${process.env.PUBLIC_URL}/assets/spinner.gif`,
  title: 'Just a sec ...'
}

export default Spinner
