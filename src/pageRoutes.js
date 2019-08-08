import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Home, Contact } from './pages'
import { CONTACT, HOME } from './Routes'

const PageRoutes = () => {
  return(
    <Switch>
      <Route
        path={HOME}
        exact
        component={Home}
      />
      <Route
        path={CONTACT}
        component={Contact}
      />
      <Redirect to={HOME} component={Home} />
    </Switch>
  )
}

export default PageRoutes
