import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Card, List, Badge, Spinner } from '../../components/UI'

const initialState = {
  portfolios: [
    {
      id: 1,
      thumbnail: 'http://jeremyespinosa.herokuapp.com/images/avatarmaker/1.jpg',
      title: 'Avatar Maker',
      position: 'Front & Back End Developer',
      description:
        'Creates an avatar for business presentation and icons for the current company websites.',
      features: [
        'Automating the creation of the avatar',
        'Creating Avatar based on gender, position you want.',
        "Customizing avatar you've chosen from top to bottom of body parts.",
        "Storing of avatar you've created",
        'Searching Functionality for the other user to see your created avatar.'
      ],
      technologies: [
        'HTML/5',
        'CSS/3 (LESS/SCSS)',
        'Javascript',
        'JQuery',
        'Handlebarjs',
        'Gulp',
        'PHP',
        'CodeIgniter',
        'MYSQL'
      ]
    }
  ]
}

const Portfolio = () => {
  const [values] = useState(initialState)

  const renderPortfolios = () => {
    const portfolios = values.portfolios.map(portfolio => {
      return (
        <Card className='card card--primary' key={portfolio.id}>
          <div
            className='card__image-holder'
            style={{
              backgroundImage: `url(${portfolio.thumbnail})`
            }}
          ></div>
          <div className='card__details'>
            <h3>{portfolio.title}</h3>
            <p className='text-secondary'>
              <i>{portfolio.position}</i>
            </p>
            <p>{portfolio.description}</p>

            <List className='list list--disc'>
              {portfolio.features.map(feature => (
                <li key={feature}>{feature}</li>
              ))}
            </List>

            <Link
              className='btn btn-primary my-2'
              to={`/portfolio/${portfolio.id}`}
            >
              SEE MORE
            </Link>

            <p className='mb-2'>
              <b>Technologies Used:</b>
            </p>

            <List className='list list--inline'>
              {portfolio.technologies.map(technology => {
                return (
                  <li key={technology}>
                    <Badge>{technology}</Badge>
                  </li>
                )
              })}
            </List>
          </div>
        </Card>
      )
    })

    return portfolios
  }

  return (
    <div className='main-container main-container--adjustment'>
      <h2 className='text-center my-4'>
        MY <span className='text-primary'>PORTFOLIO</span>
      </h2>

      {values.portfolios ? renderPortfolios() : <Spinner />}
    </div>
  )
}

export default Portfolio
