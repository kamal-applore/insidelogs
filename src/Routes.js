import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Home from './pages/Home'
import { ROUTES } from './shared/constants'

export default function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path={ROUTES.HOME}>
            <Home />
          </Route>
          <Route exact path={ROUTES.ABOUT}>
            <About />
          </Route>
          <Route exact path={ROUTES.CONTACT}>
            <Contact />
          </Route>
          <Route exact path={ROUTES.BLOG}>
            <Blog />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
