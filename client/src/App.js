import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Navigation, Spinner } from './components/UI'

const Home = React.lazy(() => import('./pages/Home'))
const About = React.lazy(() => import('./pages/About'))
const Portfolio = React.lazy(() => import('./pages/Portfolio'))
const Experience = React.lazy(() => import('./pages/Experience'))
const Contact = React.lazy(() => import('./pages/Contact'))

function App() {
  return (
    <div className='App'>
      <Suspense fallback={<Spinner />}>
        <Router>
          <Navigation />

          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/about' exact>
              <About />
            </Route>
            <Route path='/portfolio' exact>
              <Portfolio />
            </Route>
            <Route path='/experience' exact>
              <Experience />
            </Route>
            <Route path='/contact' exact>
              <Contact />
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </div>
  )
}

export default App
