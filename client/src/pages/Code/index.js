import React, { useEffect } from 'react'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'
import ProgressiveImage from 'react-progressive-image-loading'

import { Card, Spinner, FloatingAction } from '../../components/UI'
import { getCodes } from '../../store/actions/codeAction'

const Code = props => {
  const renderCodes = () => {
    const codes = props.codes.map(code => {
      return (
        <div className='col-12 col-sm-6 col-md-4 mb-2' key={code.id}>
          <Card className='card card--secondary'>
            <ProgressiveImage
              src={code.thumbnail}
              render={(src, style) => (
                <div
                  className='card__image-holder'
                  style={Object.assign(style, {
                    backgroundImage: `url(${src})`
                  })}
                />
              )}
            />

            <div className='card__details'>
              <p className='title'>{code.title}</p>
              <p className='description'>{code.description}</p>

              <a
                href={`${code.link}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                <FloatingAction>
                  <FontAwesomeIcon icon={faLink} />
                </FloatingAction>
              </a>
            </div>
          </Card>
        </div>
      )
    })

    return <div className='row'>{codes}</div>
  }

  useEffect(() => {
    props.getCodes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='main-container main-container--adjustment'>
      {props.codes ? renderCodes() : <Spinner />}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    codes: state.code.codes
  }
}

const mapDispatchToProps = {
  getCodes
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Code)
