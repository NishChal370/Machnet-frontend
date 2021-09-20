import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './HomePage/home'
import Genres from './GenresPage/genres'
import Footer from './common/Fotter/footer'
import NavBar from './common/NavBar/navBar'
import Watchlist from './WatchListPage/watchlist'
import MovieDetail from './MovieDetailPage/movieDetail'

function MainFrame() {

    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route exact path='/' component={Home} /> 
                <Route exact path='/genres' component={Genres} /> 
                <Route exact path='/movie-detail' component={MovieDetail}/>
                <Route exact path='/watchlist' component={Watchlist}/>
            </Switch>
            <Footer/>
        </Router>
    )
}

export default MainFrame
