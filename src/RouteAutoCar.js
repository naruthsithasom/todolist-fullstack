import React from 'react'
import {Route} from 'react-router-dom'
import Order from './components/pages/Order'

function RouteAutoCar() {
  return (
      <Route path="/auto-car">
        <Order/>
      </Route>
  )
}

export default RouteAutoCar
