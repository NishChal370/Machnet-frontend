import React, { useContext } from 'react'
import { useHistory } from 'react-router';

import './navBar.css';
import { Context } from '../../../App';
import { RiArrowDownSFill } from 'react-icons/ri';

function NavBar() {
    const { changeLimit }= useContext(Context);
    const history = useHistory();
    
    const seeAllHandler=(genre)=>{
        changeLimit(genre);
        history.push({pathname:'/genres', state:genre});
    }

    const goHomeHandler=()=>{
        history.push('/');
    }

    const goWatchListPageHandler=()=>{
        history.push('/watchlist');
    }

    return (
        <>
            <div className="nav__container">
                <p onClick={goHomeHandler} className='logo'>MOVIE APP</p>

                <nav>
                    <ul className="nav__list">
                        <li><button className='nav__button extra--padding' onClick={goHomeHandler}>Home</button></li>
                        <li className="dropdown__button">
                            <button className='nav__button'>Movies<RiArrowDownSFill/></button>
                            <span className="dropdown__content">
                                <p onClick={()=>seeAllHandler('action')}>Action</p>
                                <p onClick={()=>seeAllHandler('crime')}>Crime</p>
                                <p onClick={()=>seeAllHandler('thriller')}>Thriller</p>
                                <p onClick={()=>seeAllHandler('drama')}>Drama</p>
                            </span>
                        </li>
                        <li><button className='nav__button' onClick={goWatchListPageHandler}>Watch List</button></li>
                    </ul>
                </nav>
                
            </div>
        </>
    )
}

export default NavBar
