import React from 'react'
import { Link } from 'react-router-dom'
import ProgressiveImage from 'react-progressive-image-loading'

import { List } from '../../components/UI'

const Profile = () => {
    const getAge = (DOB) => {
        let today = new Date(),
            birthDate = new Date(DOB),
            age = today.getFullYear() - birthDate.getFullYear(),
            m = today.getMonth() - birthDate.getMonth()

        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age = age - 1
        }

        return age
    }

    return (
        <div className='main-container main-container--adjustment'>
            <div className='row'>
                <div className='col-12 col-sm-4 mb-2'>
                    <div className='image'>
                        <div className='image__frame'>
                            <ProgressiveImage
                                src={`${process.env.PUBLIC_URL}/assets/about_picture.jpg`}
                                render={(src, style) => (
                                    <img
                                        src={src}
                                        style={style}
                                        alt='profile'
                                    />
                                )}
                            />
                        </div>
                    </div>
                </div>
                <div className='col-12 col-sm-8 align-self-center'>
                    <h2 className='mb-4'>
                        Front-end{' '}
                        <span className='text-primary'>Developer</span>
                    </h2>

                    <p>
                        I'm <b>Jeremy Espinosa</b>. I'm a simple, creative,
                        enthusiastic and fun-loving person. I always like to
                        create something on my own which is helpful for others.
                    </p>
                    <p>
                        I'm experienced Web Developer seeking opportunity to
                        bring knowledge of programming. A self-motivated IT
                        professional with huge knowledge and proficiency in
                        HTML, CSS, JavaScript, JQuery, Reactjs, Nodejs, PHP and
                        mobile responsive web development, as well as strong
                        skills and ability in writing clean and efficient code.
                    </p>

                    <List className='list list--col-2 list--no-style'>
                        <li className='py-1'>
                            <b>Name: </b>Jeremy Espinosa
                        </li>
                        <li className='py-1'>
                            <b>Phone: </b>+63 9159795830
                        </li>
                        <li className='py-1'>
                            <b>Age: </b>
                            {getAge('08/10/1995')} Years Old
                        </li>
                        <li className='py-1'>
                            <b>Address: </b>NCR, Philippines
                        </li>
                        <li className='py-1'>
                            <b>Email: </b>jeremyespinosa1995@gmail.com
                        </li>
                        <li className='py-1'>
                            <b>Languages: </b>Filipino, English
                        </li>
                    </List>

                    <Link className='btn btn-primary mt-2' to='/portfolio'>
                        See Portfolio
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Profile
