import React from 'react'
import { Link } from 'react-router-dom'

import { Banner } from '../../components/UI/'

const Home = () => {
  return (
    <div>
      <Banner>
        <img
          src='https://media-exp1.licdn.com/dms/image/C5103AQGjrqkWxoYGhw/profile-displayphoto-shrink_200_200/0?e=1587600000&v=beta&t=KjrbMaMQVrQCdckGwqS_PcXPpSZOyQ_tO7tFzuFA__k'
          alt=''
        />
        <div className='details'>
          <p className='title'>I'm Jeremy</p>
          <p className='description'>Front End Developer</p>
          <Link to='/about'>Learn More >></Link>
        </div>
      </Banner>
    </div>
  )
}

export default Home
