import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Navigation, Spinner } from './components/UI'

const Home = React.lazy(() => import('./pages/Home'))
const Profile = React.lazy(() => import('./pages/Profile'))
const Portfolio = React.lazy(() => import('./pages/Portfolio'))
const Experience = React.lazy(() => import('./pages/Experience'))
const Code = React.lazy(() => import('./pages/Code'))
const Contact = React.lazy(() => import('./pages/Contact'))
const NotFound = React.lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <div className='App'>
      <Suspense fallback={<Spinner />}>
        <Router>
          <Navigation />

          <Switch>
            <Route path='/' exact render={() => <Home />} />
            <Route path='/Profile' exact render={() => <Profile />} />
            <Route path='/portfolio' exact render={() => <Portfolio />} />
            <Route path='/experience' exact render={() => <Experience />} />
            <Route path='/code' exact render={() => <Code />} />
            <Route path='/contact' exact render={() => <Contact />} />
            <Route render={() => <NotFound />} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  )
}

export default App
