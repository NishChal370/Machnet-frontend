import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './HomePage/home'
import Genres from './GenresPage/genres'
import NavBar from './common/NavBar/navBar'

function MainFrame() {

    return (
        <>
            <NavBar/>
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} /> 
                    <Route exact path='/genres' component={Genres} /> 
                </Switch>
            </Router>
        </>
    )
}

export default MainFrame
