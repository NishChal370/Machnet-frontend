import React from 'react'
import './card.css'

function Card(props) {
    let {large_cover_image, rating,title_english} = props.data;
    return (
        <main className="card__container">
            <figure className="card__figure">
                <img src={large_cover_image} alt="movieImage"/>
            </figure>
            <div>
                <p>{rating}</p>
                <p>{title_english}</p>
            </div>
        </main>
    )
}

export default Card
