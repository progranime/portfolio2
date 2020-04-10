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
            <Route path='/' exact render={() => <Home />} />
            <Route path='/about' exact render={() => <About />} />
            <Route path='/portfolio' exact render={() => <Portfolio />} />
            <Route path='/experience' exact render={() => <Experience />} />
            <Route path='/contact' exact render={() => <Contact />} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  )
}

export default App
