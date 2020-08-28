import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Blog from './pages/Blog.jsx'
import About from './pages/About.jsx'
import NotFound from './pages/NotFound.jsx'

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
