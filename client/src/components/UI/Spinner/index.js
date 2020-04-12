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
  imageSrc:
    'https://www.reviewpoint.com/wp-content/plugins/google-search-place/fonts/images/lg.curve-bars-loading-indicator.gif',
  title: 'Just a sec ...'
}

export default Spinner
