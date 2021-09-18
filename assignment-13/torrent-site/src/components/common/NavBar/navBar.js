import React from 'react'
import './navBar.css'
function NavBar() {
    return (
        <>
            <div className="nav__container">
                <figure>
                    <img src='...' alt="I am Logo"/>
                </figure>
                <nav>
                    <ul className="nav__list">
                        <li><button className='nav__button'>Home</button></li>
                        <li className="dropdown__button">
                            <button className='nav__button'>Movies</button>
                            <span className="dropdown__content">
                                <p>Action</p>
                                <p>Crime</p>
                                <p>Drama</p>
                                <p>Thriller</p>
                            </span>
                        </li>
                        <li><button className='nav__button'>Watch List</button></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default NavBar
