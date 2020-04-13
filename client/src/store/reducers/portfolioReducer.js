import { GET_PORTFOLIOS } from '../types'

const initialState = {
    portfolios: [
        {
            id: 1,
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
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/avatarmaker/7.jpg`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/avatarmaker/7.jpg`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/avatarmaker/8.jpg`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/avatarmaker/8.jpg`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/avatarmaker/9.jpg`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/avatarmaker/9.jpg`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/avatarmaker/10.jpg`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/avatarmaker/10.jpg`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/avatarmaker/11.jpg`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/avatarmaker/11.jpg`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/avatarmaker/12.jpg`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/avatarmaker/12.jpg`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/avatarmaker/13.jpg`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/avatarmaker/13.jpg`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/avatarmaker/14.jpg`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/avatarmaker/14.jpg`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/avatarmaker/15.jpg`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/avatarmaker/15.jpg`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/avatarmaker/16.jpg`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/avatarmaker/16.jpg`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/avatarmaker/17.jpg`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/avatarmaker/17.jpg`
                }
            ]
        },
        {
            id: 2,
            title: 'Job Description / Pledge',
            position: 'Front & Back End Developer',
            description:
                'Creates the job description of the employees instead of creating it manually.',
            features: [
                'Automating job description of the company’s employee',
                'CRUD (Create, Read, Update, Delete) functionality.',
                'CRUD functionality will depends on its user role',
                'Converting the job description to PDF file',
                'Exporting of data to CSV file.',
                'Tracking user action to the application'
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
                    original: `${process.env.PUBLIC_URL}/images/pledges/1.jpg`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/pledges/1.jpg`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/pledges/2.jpg`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/pledges/2.jpg`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/pledges/3.jpg`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/pledges/3.jpg`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/pledges/4.jpg`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/pledges/4.jpg`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/pledges/5.jpg`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/pledges/5.jpg`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/pledges/7.jpg`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/pledges/7.jpg`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/pledges/8.jpg`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/pledges/8.jpg`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/pledges/9.jpg`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/pledges/9.jpg`
                }
            ]
        },
        {
            id: 3,
            title: 'Superants.inc Website',
            position: 'Front & Back End Developer',
            description:
                'Creates an avatar for business presentation and icons for the current company websites.',
            features: [
                'Created informational websites to know what company offers',
                'Used Google Maps API',
                'Created contact form to know users concerns.'
            ],
            technologies: [
                'HTML/5',
                'CSS/3 (LESS/SCSS)',
                'Javascript',
                'JQuery',
                'Gulp',
                'PHP',
                'CodeIgniter',
                'MYSQL'
            ],
            gallery: [
                {
                    original: `${process.env.PUBLIC_URL}/images/superants/homepage.jpg`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/superants/homepage.jpg`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/superants/about.jpg`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/superants/about.jpg`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/superants/services.jpg`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/superants/services.jpg`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/superants/contact.jpg`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/superants/contact.jpg`
                }
            ]
        },
        {
            id: 4,
            title: 'MID Generator',
            position: 'Front & Back End Developer',
            description:
                'The objective of this project is to automate the creation of the MID and output it in a PDF.',
            features: [
                'Automates the creation of the MID',
                'List and filters all of the MID created of the user',
                'Preview on how the PDF will look like when its converted into a PDF',
                'Can generate a PDF',
                'Can see the previous documents for references for creating new MID or check what are the previous information on it.',
                'CRUD functionality to the MID document'
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
                    original: `${process.env.PUBLIC_URL}/images/midGenerator/1.jpg`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/midGenerator/1.jpg`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/midGenerator/2.jpg`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/midGenerator/2.jpg`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/midGenerator/3.jpg`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/midGenerator/3.jpg`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/midGenerator/4.jpg`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/midGenerator/4.jpg`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/midGenerator/5.jpg`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/midGenerator/5.jpg`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/midGenerator/6.jpg`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/midGenerator/6.jpg`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/midGenerator/7.jpg`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/midGenerator/7.jpg`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/midGenerator/8.jpg`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/midGenerator/8.jpg`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/midGenerator/9.jpg`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/midGenerator/9.jpg`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/midGenerator/10.jpg`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/midGenerator/10.jpg`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/midGenerator/11.jpg`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/midGenerator/11.jpg`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/midGenerator/12.jpg`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/midGenerator/12.jpg`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/midGenerator/13.jpg`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/midGenerator/13.jpg`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/midGenerator/14.jpg`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/midGenerator/14.jpg`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/midGenerator/15.jpg`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/midGenerator/15.jpg`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/midGenerator/16.jpg`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/midGenerator/16.jpg`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/midGenerator/17.jpg`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/midGenerator/17.jpg`
                }
            ]
        },
        {
            id: 5,
            title: 'Digital Assets Management',
            position: 'Front & Back End Developer',
            description:
                'A useful search engine that will stores all the assets and can be search easily by using the tags of the image to avoid duplicating images to purchased.',
            features: [
                'Manages digital assets of the company',
                'Search through available assets to avoid duplication',
                'Adding/Updating tags/keywords of the assets to search easily',
                'Favorites assets to have collection',
                'Can group download assets and compress it in a zip file'
            ],
            technologies: [
                'HTML/5',
                'CSS/3 (LESS/SCSS)',
                'Javascript(ES6)',
                'ReactJS',
                'Redux',
                'Expressjs',
                'Nodejs',
                'MYSQL'
            ],
            gallery: [
                {
                    original: `${process.env.PUBLIC_URL}/images/dam/1.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/dam/1.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/dam/2.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/dam/2.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/dam/3.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/dam/3.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/dam/4.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/dam/4.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/dam/5.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/dam/5.png`
                }
            ]
        },
        {
            id: 8,
            title: 'Business Card Generator',
            position: 'Front & Back End Developer',
            description:
                'Creates a Business Card of the employees that will output a PDF and also handles the process if the request for creating the card is approved by the admin',
            features: [
                'Automates the creation of Business Card of employees',
                'CRUD (Create, Read, Update, Delete) functionality of the system',
                'Sending email to the admin for approving the created Business Card',
                'Admin dashboard for updating the status of those Business Card created',
                'Manage users who can access with admin rights'
            ],
            technologies: [
                'HTML/5',
                'CSS/3 (LESS/SASS)',
                'Javascript(ES6)',
                'ReactJS',
                'Redux',
                'Expressjs',
                'Nodejs',
                'MYSQL'
            ],
            gallery: [
                {
                    original: `${process.env.PUBLIC_URL}/images/businessCardGenerator/1.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/businessCardGenerator/1.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/businessCardGenerator/2.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/businessCardGenerator/2.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/businessCardGenerator/3.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/businessCardGenerator/3.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/businessCardGenerator/4.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/businessCardGenerator/4.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/businessCardGenerator/5.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/businessCardGenerator/5.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/businessCardGenerator/6.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/businessCardGenerator/6.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/businessCardGenerator/7.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/businessCardGenerator/7.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/businessCardGenerator/8.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/businessCardGenerator/8.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/businessCardGenerator/9.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/businessCardGenerator/9.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/businessCardGenerator/10.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/businessCardGenerator/10.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/businessCardGenerator/11.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/businessCardGenerator/11.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/businessCardGenerator/12.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/businessCardGenerator/12.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/businessCardGenerator/13.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/businessCardGenerator/13.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/businessCardGenerator/14.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/businessCardGenerator/14.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/businessCardGenerator/15.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/businessCardGenerator/15.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/businessCardGenerator/16.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/businessCardGenerator/16.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/businessCardGenerator/17.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/businessCardGenerator/17.png`
                }
            ]
        },
        {
            id: 6,
            title: 'GeoSCAN',
            position: 'Mobile Developer',
            description:
                'A mobile application that can alert the user that there is a crime happend to a certain location.',
            features: [
                'Programmer and concept developer of this application',
                'Acquired data from the Police station of the target location of this app',
                'Utilized the Google Maps API to provide the functionality needed by the application'
            ],
            technologies: ['HTML/5', 'CSS/3 (LESS/SCSS)', 'Java', 'Eclipse'],
            gallery: [
                {
                    original: `${process.env.PUBLIC_URL}/images/geoscan/1.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/geoscan/1.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/geoscan/2.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/geoscan/2.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/geoscan/3.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/geoscan/3.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/geoscan/4.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/geoscan/4.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/geoscan/5.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/geoscan/5.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/geoscan/6.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/geoscan/6.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/geoscan/7.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/geoscan/7.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/geoscan/8.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/geoscan/8.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/geoscan/9.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/geoscan/9.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/geoscan/10.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/geoscan/10.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/geoscan/11.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/geoscan/11.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/geoscan/12.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/geoscan/12.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/geoscan/13.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/geoscan/13.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/geoscan/14.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/geoscan/14.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/geoscan/15.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/geoscan/15.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/geoscan/16.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/geoscan/16.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/geoscan/17.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/geoscan/17.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/geoscan/18.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/geoscan/18.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/geoscan/19.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/geoscan/19.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/geoscan/20.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/geoscan/20.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/geoscan/21.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/geoscan/21.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/geoscan/22.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/geoscan/22.png`
                }
            ]
        },
        {
            id: 7,
            title: 'Police GeoSCAN',
            position: 'Mobile Developer',
            description:
                'Mobile App for the police officer to report the crime where it take place',
            features: [
                'Programmer and concept developer of this application',
                'Acquired data from the Police station of the target location of this app',
                'Utilized the Google Maps API to provide the functionality needed by the application'
            ],
            technologies: ['HTML/5', 'CSS/3 (LESS/SCSS)', 'Java', 'Eclipse'],
            gallery: [
                {
                    original: `${process.env.PUBLIC_URL}/images/policeGeoscan/1.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/policeGeoscan/1.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/policeGeoscan/2.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/policeGeoscan/2.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/policeGeoscan/3.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/policeGeoscan/3.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/policeGeoscan/4.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/policeGeoscan/4.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/policeGeoscan/5.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/policeGeoscan/5.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/policeGeoscan/6.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/policeGeoscan/6.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/policeGeoscan/7.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/policeGeoscan/7.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/policeGeoscan/8.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/policeGeoscan/8.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/policeGeoscan/9.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/policeGeoscan/9.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/policeGeoscan/10.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/policeGeoscan/10.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/policeGeoscan/11.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/policeGeoscan/11.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/policeGeoscan/12.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/policeGeoscan/12.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/policeGeoscan/13.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/policeGeoscan/13.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/policeGeoscan/14.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/policeGeoscan/14.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/policeGeoscan/15.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/policeGeoscan/15.png`
                },
                {
                    original: `${process.env.PUBLIC_URL}/images/policeGeoscan/16.png`,
                    thumbnail: `${process.env.PUBLIC_URL}/images/policeGeoscan/16.png`
                }
            ]
        }
    ]
}

const portfolioReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_PORTFOLIOS:
            return {
                ...state,
                payload
            }
        default:
            return {
                ...state
            }
    }
}

export default portfolioReducer
