import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Navigation, Spinner, FloatingAction } from './components/UI'
import { useScroll } from './hooks/useScroll'

const Home = React.lazy(() => import('./pages/Home'))
const Profile = React.lazy(() => import('./pages/Profile'))
const Portfolio = React.lazy(() => import('./pages/Portfolio'))
const Experience = React.lazy(() => import('./pages/Experience'))
const Code = React.lazy(() => import('./pages/Code'))
// const Contact = React.lazy(() => import('./pages/Contact'))
const NotFound = React.lazy(() => import('./pages/NotFound'))
const AuthLogin = React.lazy(() => import('./pages/Auth/Login'))

const initialState = {
    scrollYLimit: 300
}

function App() {
    const { values, scrollTop } = useScroll(initialState)

    return (
        <div className='App'>
            <Suspense fallback={<Spinner />}>
                <Router>
                    <Navigation />
                    {values.isBeyond && (
                        <FloatingAction
                            className='floating-action floating-action--scroll-up'
                            onClick={scrollTop}
                        >
                            <FontAwesomeIcon icon={faArrowUp} />
                        </FloatingAction>
                    )}

                    <Switch>
                        <Route
                            path='/profile'
                            exact
                            render={() => <Profile />}
                        />
                        <Route
                            path='/portfolio'
                            exact
                            render={() => <Portfolio />}
                        />
                        <Route
                            path='/experience'
                            exact
                            render={() => <Experience />}
                        />
                        <Route path='/code' exact render={() => <Code />} />
                        {/* <Route path='/contact' exact render={() => <Contact />} /> */}
                        <Route
                            path='/auth/login'
                            exact
                            render={() => <AuthLogin />}
                        />
                        <Route path='/' exact render={() => <Home />} />
                        <Route render={() => <NotFound />} />
                    </Switch>
                </Router>
            </Suspense>
        </div>
    )
}

export default App
