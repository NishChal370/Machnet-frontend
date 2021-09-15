import React from 'react'
import './navBar.css'
function NavBar(props) {

    let{changeCateogaryHandler, inputChangeHandler, inputvalue, confirmInputHandler} = props;

    return (
        <header className="container__header">
            <h1 className='nav__title'>Products</h1>
            <nav className="products__nav">
                <ul>
                    <li onClick={()=>changeCateogaryHandler("men's clothing")}>Men's</li>
                    <li onClick={()=>changeCateogaryHandler("women's clothing")}>Women's</li>
                    <li onClick={()=>changeCateogaryHandler("jewelery")}>Jewelery</li>
                    <li onClick={()=>changeCateogaryHandler("electronics")}>Electronics</li>
                </ul>
                <div className='search__container'>
                    <input type="text" name="searchBox" value={inputvalue} onChange={inputChangeHandler}/>
                    <button onClick={confirmInputHandler}>Search</button>
                </div>
            </nav>
        </header>
    )
}

export default NavBar
