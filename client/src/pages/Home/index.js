import React from 'react'
import { Link } from 'react-router-dom'
import ProgressiveImage from 'react-progressive-image-loading'

import { Banner } from '../../components/UI/'

const Home = () => {
  return (
    <div>
      <Banner>
        <ProgressiveImage
          src={`${process.env.PUBLIC_URL}/assets/home_picture.jpg`}
          render={(src, style) => (
            <div
              style={Object.assign(style, { backgroundImage: `url(${src})` })}
            />
          )}
        />
        <div className='details'>
          <p className='title'>Jeremy Espinosa</p>
          <p className='description mb-2'>Front End Developer</p>
          <Link to='/profile' className='btn btn-primary text-white'>
            Learn More
          </Link>
        </div>
      </Banner>
    </div>
  )
}

export default Home
