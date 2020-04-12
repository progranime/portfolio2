import React, { useState } from 'react'

import { Card, List } from '../../components/UI'

const initialState = {
  skills: [
    {
      id: 1,
      title: 'HTML/5',
      progress: '90%'
    },
    {
      id: 2,
      title: 'CSS/3 (BEM, Mobile First Design)',
      progress: '90%'
    },
    {
      id: 3,
      title: 'Javascript(ES6, JQuery)',
      progress: '90%'
    },
    {
      id: 4,
      title: 'React JS',
      progress: '80%'
    },
    {
      id: 5,
      title: 'NodeJS',
      progress: '75%'
    },
    {
      id: 6,
      title: 'PHP (CodeIgniter)',
      progress: '80%'
    }
  ]
}

const Experience = () => {
  const [values] = useState(initialState)

  const renderSkills = () => {
    const skills = values.skills.map(skill => {
      return (
        <div className='col-12 col-sm-6 mb-2' key={skill.id}>
          <p>{skill.title}</p>
          <div className='progress'>
            <div className='progress-bar' style={{ width: skill.progress }}>
              {skill.progress}
            </div>
          </div>
        </div>
      )
    })

    return <div className='row'>{skills}</div>
  }

  return (
    <div className='main-container main-container--adjustment'>
      <h2 className='text-center my-4'>
        MY <span className='text-primary'>EXPERIENCE</span>
      </h2>

      <div className='row'>
        <div className='col-12 col-sm-6 mb-2'>
          <Card header='Front-End Developer'>
            <p>
              <b>Music Tribe</b>
            </p>
            <p>August 2017 - Present</p>
            <List className='list list--disc'>
              <li>
                Responsible for creating, improving and developing websites
                using best practices in coding.
              </li>
              <li>
                Provides support to current websites to enhance and clean up
                code for better performance
              </li>
              <li>
                Handles Data which focuses in downloads, software and documents
                of the website requested by stakeholders
              </li>
              <li>
                Creates Automation Project to avoid repetitive task of the
                company
              </li>
              <li>
                Follows Mobile First Design and Modular coding to have better
                structure of coding
              </li>
            </List>
          </Card>
        </div>
        <div className='col-12 col-sm-6 mb-2'>
          <Card header='Web Developer '>
            <p>
              <b>Gee Pacific Services Inc</b>
            </p>
            <p>August 2017 - Present</p>
            <List className='list list--disc'>
              <li>
                Was responsible for ensuring and maintaining that websites are
                properly working on a daily basis
              </li>
              <li>
                Was responsible for creating responsive websites for better
                usage in mobile devices
              </li>
              <li>
                Was also responsible for utilizing Chinese CMS software in
                creating websites
              </li>
            </List>
          </Card>
        </div>
      </div>

      <h2 className='text-center my-4'>
        MY <span className='text-primary'>SKILLS</span>
      </h2>
      <Card>{renderSkills()}</Card>
    </div>
  )
}

export default Experience
