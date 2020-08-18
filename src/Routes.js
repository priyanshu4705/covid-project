import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Blog from './components/Blog'
import About from './components/About'
import NotFound from './components/NotFound'

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Blog" component={Blog} />
            <Route exact path="/About" component={About} />
            <Route component={NotFound} />
        </Switch>
    )
}

export default Routes
