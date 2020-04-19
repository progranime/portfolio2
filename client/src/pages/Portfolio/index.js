import React, { useEffect } from 'react'
import ImageGallery from 'react-image-gallery'
import { connect } from 'react-redux'

import { Card, List, Badge, Spinner } from '../../components/UI'
import { getPortfolios } from '../../store/actions/portfolioAction'

const Portfolio = props => {
  const renderPortfolios = () => {
    const portfolios = props.portfolios.map(portfolio => {
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
                    style={{
                      backgroundImage: `url(${data.original})`
                    }}
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

  useEffect(() => {
    props.getPortfolios()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='main-container main-container--adjustment'>
      {props.portfolios ? renderPortfolios() : <Spinner />}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    portfolios: state.portfolio.portfolios
  }
}

const mapDispatchToProps = {
  getPortfolios
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Portfolio)
