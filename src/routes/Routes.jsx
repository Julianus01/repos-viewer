import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

// Pages
import LandingPage from 'components/pages/LandingPage'
import UserPage from 'components/pages/UserPage'

const Routes = () => (
  <Switch>
    <Route path='/' exact={true} component={LandingPage} />
    <Route path='/:username' exact={true} component={UserPage} />
    <Route path='*' exact={true} component={() => <Redirect to='/' />} />
  </Switch>
)

export default Routes
