import React from 'react'
import ProgressiveImage from 'react-progressive-image-loading'

import './index.scss'

const Banner = props => {
  return (
    <div className='banner'>
      <div className='banner__container'>
        <ProgressiveImage
          src={props.backgroundImage}
          render={(src, style) => (
            <div
              className='banner__background'
              style={Object.assign(style, { backgroundImage: `url(${src})` })}
            />
          )}
        />
        <div className='banner__content'>{props.children}</div>
      </div>
      <div className='banner__overlay'></div>
    </div>
  )
}

Banner.defaultProps = {
  backgroundImage: `${process.env.PUBLIC_URL}/assets/planning.jpg`
}

export default Banner
