import React, { useState } from 'react'
import ImageGallery from 'react-image-gallery'

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
      ],
      gallery: [
        {
          original: `${process.env.PUBLIC_URL}/images/avatarmaker/1.jpg`,
          thumbnail: `${process.env.PUBLIC_URL}/images/avatarmaker/1.jpg`
        },
        {
          original: `${process.env.PUBLIC_URL}/images/avatarmaker/2.jpg`,
          thumbnail: `${process.env.PUBLIC_URL}/images/avatarmaker/2.jpg`
        },
        {
          original: `${process.env.PUBLIC_URL}/images/avatarmaker/3.jpg`,
          thumbnail: `${process.env.PUBLIC_URL}/images/avatarmaker/3.jpg`
        },
        {
          original: `${process.env.PUBLIC_URL}/images/avatarmaker/4.jpg`,
          thumbnail: `${process.env.PUBLIC_URL}/images/avatarmaker/4.jpg`
        },
        {
          original: `${process.env.PUBLIC_URL}/images/avatarmaker/5.jpg`,
          thumbnail: `${process.env.PUBLIC_URL}/images/avatarmaker/5.jpg`
        },
        {
          original: `${process.env.PUBLIC_URL}/images/avatarmaker/6.jpg`,
          thumbnail: `${process.env.PUBLIC_URL}/images/avatarmaker/6.jpg`
        }
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
          <div className='card__image-holder'>
            <ImageGallery
              items={portfolio.gallery}
              showPlayButton={false}
              showNav={false}
              renderItem={data => {
                return (
                  <div
                    className='card__image-thumbnail'
                    style={{ backgroundImage: `url(${data.original})` }}
                  />
                )
              }}
            />
          </div>

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

            <p className='mt-4 mb-2'>
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
      {values.portfolios ? renderPortfolios() : <Spinner />}
    </div>
  )
}

export default Portfolio
